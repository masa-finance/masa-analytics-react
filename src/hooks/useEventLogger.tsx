import { useCallback } from 'react';

import { BaseEventData, EventType } from '@masa-finance/analytics-sdk';

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
      return logEvent({
        type,
        user_address,
        client_id,
        event_data,
        endpoint,
      });
    },
    []
  );

  return {
    logEvent,
  };
};
