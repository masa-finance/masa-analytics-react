import { useCallback, useMemo } from 'react';

import {
  FireConnectWalletEventArgs,
  FireEventArgs,
  FireLoginEventArgs,
  FireMintEventArgs,
  FirePageViewEventArgs,
  FireTrackCustomEventArgs,
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
        clientId,
      });
    }, [clientApp, clientId]);

    /**
     * Fire an event once the user logged in
     */
    const fireLoginEvent = useCallback(
      async ({
        user_address,
        additionalEventData,
      }: FireLoginEventArgs): Promise<void> => {
        await masaAnalytics.fireLoginEvent({
          user_address,
          additionalEventData,
        });
      },
      [masaAnalytics]
    );

    /**
     * Fire an event once the user changes the page
     */
    const firePageViewEvent = useCallback(
      async (firePageViewEventArgs: FirePageViewEventArgs): Promise<void> => {
        await masaAnalytics.firePageViewEvent(firePageViewEventArgs);
      },
      [masaAnalytics]
    );

    /**
     * Fire an event once a user tries to mint a token
     */
    const fireMintEvent = useCallback(
      async (fireMintEventArgs: FireMintEventArgs): Promise<void> => {
        await masaAnalytics.fireMintEvent(fireMintEventArgs);
      },
      [masaAnalytics]
    );

    /**
     * Fire an event once a user tries to mint a token
     */
    const fireConnectWalletEvent = useCallback(
      async (
        fireConnectWalletEventArgs: FireConnectWalletEventArgs
      ): Promise<void> => {
        await masaAnalytics.fireConnectWalletEvent(fireConnectWalletEventArgs);
      },
      [masaAnalytics]
    );

    /**
     * Fire an event once a user tries to mint a token
     */
    const fireTrackCustomEvent = useCallback(
      async (
        fireTrackCustomEventArgs: FireTrackCustomEventArgs
      ): Promise<void> => {
        await masaAnalytics.fireTrackCustomEvent(fireTrackCustomEventArgs);
      },
      [masaAnalytics]
    );
    /**
     * Fire a flexible event
     * It can use any of the EventTypes
     */
    const fireEvent = useCallback(
      async (type: string, fireEventArgs: FireEventArgs): Promise<void> => {
        await masaAnalytics.fireEvent(type, fireEventArgs);
      },
      [masaAnalytics]
    );

    return {
      fireEvent,
      fireLoginEvent,
      firePageViewEvent,
      fireConnectWalletEvent,
      fireTrackCustomEvent,
      fireMintEvent,
    };
  };
