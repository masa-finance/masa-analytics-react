import { useCallback } from 'react';

import {
  ConnectWalletEventData,
  EventTypes,
  FireMintEventArgs,
  LoginEventData,
  MintEventData,
  PageViewEventData,
} from '../interfaces/EventData';
import { useEventLogger } from './useEventLogger';

export const useMasaAnalyticsReact = ({
  clientApp,
  clientName,
  clientId,
}: {
  clientApp: string;
  clientName: string;
  clientId: string;
}) =>
  // NOTE: return type inferred automatically
  {
    const { logEvent } = useEventLogger();

    /**
     * Fire an event once the user logged in
     */
    const fireLoginEvent = useCallback(
      async ({ user_address }: { user_address: string }) => {
        const event_data: LoginEventData = {
          description: 'User logged in',
          client_app: clientApp,
          client_name: clientName,
        };

        try {
          await logEvent({
            type: 'login',
            client_id: clientId,
            user_address,
            event_data,
            endpoint: 'tracking',
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('fireLoginEvent():', error);
        }
      },
      [logEvent, clientName, clientApp, clientId]
    );

    /**
     * Fire an event once the user changes the page
     */
    const firePageViewEvent = useCallback(
      async ({
        page,
        user_address,
      }: {
        page: string;
        user_address?: string;
      }) => {
        const event_data: PageViewEventData = {
          client_app: clientApp,
          client_name: clientName,
          page,
        };

        try {
          await logEvent({
            type: 'pageView',
            client_id: clientId,
            user_address,
            event_data,
            endpoint: 'tracking',
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('firePageViewEvent():', error);
        }
      },
      [logEvent, clientName, clientApp, clientId]
    );

    /**
     * Fire an event once a user tries to mint a token
     */
    const fireMintEvent = useCallback(
      async ({
        user_address,
        token_name,
        ticker,
        token_type,
        network,
        contract_address,
        mint_fee,
        mint_currency,
        fee_asset,
        asset_amount,
        additionalEventData,
      }: FireMintEventArgs) => {
        const event_data: MintEventData = {
          client_app: clientApp,
          client_name: clientName,
          token_name,
          ticker,
          token_type,
          network,
          contract_address,
          mint_fee,
          mint_currency,
          fee_asset,
          asset_amount,
        };

        try {
          await logEvent({
            type: 'mint',
            user_address,
            client_id: clientId,
            event_data: {
              ...event_data,
              ...additionalEventData,
            },

            endpoint: 'tracking',
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('fireMintEvent():', error);
        }
      },
      [logEvent, clientName, clientApp, clientId]
    );

    /**
     * Fire an event once a user tries to mint a token
     */
    const fireConnectWalletEvent = useCallback(
      async ({
        user_address,
        wallet_type,
      }: {
        user_address: string;
        wallet_type: string;
      }) => {
        const event_data: ConnectWalletEventData = {
          client_app: clientApp,
          client_name: clientName,
          wallet_type,
          // token_name,
          // ticker,
          // token_type,
          // network,
          // contract_address,
        };

        try {
          await logEvent({
            type: 'connectWallet',
            user_address,
            client_id: clientId,
            event_data,
            endpoint: 'tracking',
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('fireMintEvent():', error);
        }
      },
      [logEvent, clientName, clientApp, clientId]
    );
    


  /**
   * Fire a flexible event
   * It can use any of the EventTypes
   */
  const fireEvent = useCallback(
    async (type: EventTypes, {
      user_address,
      token_name,
      ticker,
      token_type,
      network,
      contract_address,
      mint_fee,
      mint_currency,
      fee_asset,
      asset_amount,
      additionalEventData,
    }: FireMintEventArgs) => {
      const event_data: MintEventData = {
        client_app: clientApp,
        client_name: clientName,
        token_name,
        ticker,
        token_type,
        network,
        contract_address,
        mint_fee,
        mint_currency,
        fee_asset,
        asset_amount,
      };

      try {
        await logEvent({
          type,
          user_address,
          client_id: clientId,
          event_data: {
            ...event_data,
            ...additionalEventData,
          },

          endpoint: 'tracking',
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('fireEvent():', error);
      }
    },
    [logEvent, clientName, clientApp, clientId]
  );

    return {
      fireEvent,
      fireLoginEvent,
      firePageViewEvent,
      fireConnectWalletEvent,
      fireMintEvent,
    };
  };
