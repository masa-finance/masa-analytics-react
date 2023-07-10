import { useCallback } from "react";

import { LoginEventData, PageViewEventData } from "../interfaces/EventData";
import { useEventLogger } from "./useEventLogger";

export const useCookieMonster = ({
  clientApp,
  clientName,
}: {
  clientApp: string;
  clientName: string;
}) => {
  const { logEvent } = useEventLogger();

  const fireLoginEvent = useCallback(
    async (user_address: string) => {
      const event_data: LoginEventData = {
        description: "User logged in",
        client_app: clientApp,
        client_name: clientName,
      };

      try {
        await logEvent({
          type: "login",
          user_address,
          event_data,
        });
      } catch (error) {
        console.error("fireLoginEvent():", error);
      }
    },
    [logEvent, clientName, clientApp]
  );

  const firePageViewEvent = useCallback(
    async (page: string, user_address?: string) => {
      const event_data: PageViewEventData = {
        client_app: clientApp,
        client_name: clientName,
        page,
      };

      try {
        await logEvent({
          type: "pageView",
          user_address,
          event_data,
          endpoint: "tracking/track-page-view",
        });
      } catch (error) {
        console.error("firePageViewEvent():", error);
      }
    },
    [logEvent, clientName, clientApp]
  );

  return {
    fireLoginEvent,
    firePageViewEvent,
  };
};
