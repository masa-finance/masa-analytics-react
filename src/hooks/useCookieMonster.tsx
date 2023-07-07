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
    async (userAddress: string) => {
      const loginEventData: LoginEventData = {
        description: "User logged in",
        client_app: clientApp,
        client_name: clientName,
      };

      try {
        await logEvent("login", userAddress, loginEventData);
      } catch (error) {
        console.error("fireLoginEvent():", error);
      }
    },
    [logEvent, clientName, clientApp]
  );

  const firePageViewEvent = useCallback(
    async (address: string, page: string) => {
      const pageViewEventData: PageViewEventData = {
        client_app: clientApp,
        client_name: clientName,
        page,
      };

      try {
        await logEvent(
          "pageView",
          address,
          pageViewEventData,
          "tracking/track-page-view"
        );
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
