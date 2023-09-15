import { useCallback, useMemo } from 'react';

import {
  FireEventArgs,
  FireMintEventArgs,
  MasaAnalytics,
} from '@masa-finance/analytics-sdk';

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
    const masaAnalytics = useMemo(() => {
      return new MasaAnalytics({
        clientApp,
        clientName,
        clientId,
      });
    }, [clientApp, clientName, clientId]);

    /**
     * Fire an event once the user logged in
     */
    const fireLoginEvent = useCallback(
      async ({ user_address }: { user_address: string }) => {
        await masaAnalytics.fireLoginEvent({ user_address });
      },
      [masaAnalytics]
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
        await masaAnalytics.firePageViewEvent({
          page,
          user_address,
        });
      },
      [masaAnalytics]
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
        await masaAnalytics.fireMintEvent({
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
        });
      },
      [masaAnalytics]
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
        await masaAnalytics.fireConnectWalletEvent({
          user_address,
          wallet_type,
        });
      },
      [masaAnalytics]
    );

    /**
     * Fire a flexible event
     * It can use any of the EventTypes
     */
    const fireEvent = useCallback(
      async (
        type: string,
        {
          user_address,
          network,
          contract_address,
          asset_amount,
          asset_ticker,
          additionalEventData,
        }: FireEventArgs
      ) => {
        await masaAnalytics.fireEvent(type, {
          user_address,
          network,
          contract_address,
          asset_amount,
          asset_ticker,
          additionalEventData,
        });
      },
      [masaAnalytics]
    );

    return {
      fireEvent,
      fireLoginEvent,
      firePageViewEvent,
      fireConnectWalletEvent,
      fireMintEvent,
    };
  };
