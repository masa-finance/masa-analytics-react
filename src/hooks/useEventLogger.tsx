import { useCallback } from "react";

import { API_URL } from "../config";
import type { BaseEventData, Event } from "../interfaces/EventData";
import { EventTypes } from "../interfaces/EventData";

export const useEventLogger = () => {
  const logEvent = useCallback(
    async ({
      type,
      user_address,
      event_data,
      endpoint = "events",
    }: {
      type: EventTypes;
      user_address?: string;
      event_data: BaseEventData;
      endpoint?: string;
    }): Promise<Event | undefined> => {
      try {
        const event: Event = {
          type,
          user_address,
          timestamp: new Date(),
          event_data,
        };

        const { ok, json, statusText } = await fetch(`${API_URL}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        });

        if (ok) {
          const event: Event = await json();
          console.log("Event logged successfully");
          return event;
        } else {
          console.error("API error: " + statusText);
        }
      } catch (error) {
        console.error("Error logging event:", error);
        throw error;
      }
    },
    [],
  );

  return {
    logEvent,
  };
};
