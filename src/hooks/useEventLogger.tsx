import { post } from 'axios';
import { useCallback } from 'react';

import { API_URL } from '../config';
import type { BaseEventData, Event, EventType } from '../interfaces/EventData';

export const useEventLogger = () => {
  const logEvent = useCallback(
    async ({
      type,
      user_address,
      client_id,
      event_data,
      endpoint,
    }: {
      type: EventType;
      user_address?: string;
      event_data: BaseEventData;
      endpoint: string;
      client_id?: string;
    }): Promise<Event | undefined> => {
      try {
        const event: Event = {
          type,
          user_address,
          client_id,
          timestamp: new Date(),
          event_data,
        };

        const {
          status,
          statusText,
          data: responseData,
        } = await post<Event>(`${API_URL}/${endpoint}`, event, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (
          // ok
          status === 200 ||
          // Created
          status === 201 ||
          // Accepted
          status === 202
        ) {
          // eslint-disable-next-line no-console
          console.log(`${type} Event logged successfully`);
          return responseData;
        }
        // eslint-disable-next-line no-console
        console.error(`API error: ${statusText}`);
        return undefined;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error logging event:', error);
        throw error;
      }
    },
    []
  );

  return {
    logEvent,
  };
};
