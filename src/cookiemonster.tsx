import { useCallback } from "react";

import { API_URL } from "./config";
import type { EventData, User } from "./interfaces/EventData2";

export const useUser = () => {
  const createUser = useCallback(
    async (userAddress: string): Promise<User | undefined> => {
      try {
        const response = await fetch(`${API_URL}/users/${userAddress}`);

        if (response.ok) {
          return await response.json();
        } else if (response.status === 404) {
          const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ address: userAddress }),
          });

          if (response.ok) {
            return await response.json();
          } else {
            console.error("API error: " + response.statusText);
          }
        } else {
          console.error("API error: " + response.statusText);
        }
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    },
    []
  );

  return {
    createUser,
  };
};

export const useEventLogger = () => {
  const logEvent = useCallback(
    async (
      userAddress: string,
      eventType: string,
      eventData: EventData
    ): Promise<Event | undefined> => {
      try {
        const response = await fetch(`${API_URL}/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: eventType,
            user_address: userAddress,
            event_data: eventData,
          }),
        });

        if (response.ok) {
          const event: Event = await response.json();
          console.log("Event logged successfully");
          return event;
        } else {
          console.error("API error: " + response.statusText);
        }
      } catch (error) {
        console.error("Error logging event:", error);
        throw error;
      }
    },
    []
  );

  return {
    logEvent,
  };
};

export const useCookieMonster = () => {
  const { createUser } = useUser();
  const { logEvent } = useEventLogger();

  const executeScript = async (userAddress: string) => {
    if (!userAddress) {
      console.log("Skipping cookie monster...", {
        userAddress: userAddress,
      });
      return;
    }
    const eventType = "login";
    const eventData = {
      description: "User logged in",
      date: new Date().toISOString(),
    };

    try {
      await createUser(userAddress);
      await logEvent(userAddress, eventType, eventData);
    } catch (error) {
      console.error("Error in script execution:", error);
    }
  };

  return { executeScript };
};
