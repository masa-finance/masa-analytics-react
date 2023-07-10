import axios from "axios";
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

        const {
          status,
          statusText,
          data: responseData,
        } = await axios.post<Event>(`${API_URL}/${endpoint}`, event, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (status === 200 || status === 202) {
          console.log("Event logged successfully");
          return responseData;
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
