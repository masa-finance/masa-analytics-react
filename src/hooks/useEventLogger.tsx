import { useCallback } from "react";

import { API_URL } from "../config";
import type { BaseEventData, Event } from "../interfaces/EventData";

export const useEventLogger = () => {
  const logEvent = useCallback(
    async (
      type: string,
      user_address: string,
      event_data: BaseEventData
    ): Promise<Event | undefined> => {
      try {
        const event: Event = {
          type,
          user_address,
          timestamp: new Date(),
          event_data,
        };

        const response = await fetch(`${API_URL}/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
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
