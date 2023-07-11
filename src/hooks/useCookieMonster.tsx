import { useCallback } from "react";

import {
  LoginEventData,
  MintEventData,
  PageViewEventData,
} from "../interfaces/EventData";
import { useEventLogger } from "./useEventLogger";

export const useCookieMonster = ({
  clientApp,
  clientName,
}: {
  clientApp: string;
  clientName: string;
}): {
  fireLoginEvent: (user_address: string) => void;
  firePageViewEvent: (page: string, user_address?: string) => void;
  fireMintEvent: (
    user_address: string,
    network: string,
    contract_address: string,
  ) => void;
} => {
  const { logEvent } = useEventLogger();

  /**
   * Fire an event once the user logged in
   */
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
          endpoint: "events/create",
        });
      } catch (error) {
        console.error("fireLoginEvent():", error);
      }
    },
    [logEvent, clientName, clientApp],
  );

  /**
   * Fire an event once the user changes the page
   */
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
    [logEvent, clientName, clientApp],
  );

  /**
   * Fire an event once a user tries to mint a token
   */
  const fireMintEvent = useCallback(
    async (user_address: string, network: string, contract_address: string) => {
      const event_data: MintEventData = {
        client_app: clientApp,
        client_name: clientName,
        network,
        contract_address,
      };

      try {
        await logEvent({
          type: "mint",
          user_address,
          event_data,
          endpoint: "tracking/track-mint",
        });
      } catch (error) {
        console.error("fireMintEvent():", error);
      }
    },
    [logEvent, clientName, clientApp],
  );

  return {
    fireLoginEvent,
    firePageViewEvent,
    fireMintEvent,
  };
};
