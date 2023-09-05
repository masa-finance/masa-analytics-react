export type EventType =
  | 'pageView'
  | 'login'
  | 'mint'
  | 'connectWallet'
  | 'swap'
  | 'bridge'
  | 'addLiquidity'
  | 'farm'
  | 'trade'
  | 'claim';

export interface Event {
  type: EventType;
  client_id?: string;
  user_address?: string;
  timestamp: Date;
  event_data: BaseEventData | null;
}

export interface BaseEventData {
  client_app: string;
  client_name: string;
}

export interface LoginEventData extends BaseEventData {
  description: string;
}

// export interface ConnectWalletEventData extends BaseEventData {}
export interface PageViewEventData extends BaseEventData {
  page: string;
}

export interface MintEventData extends BaseEventData {
  token_name: string;
  ticker: string;
  token_type: string;
  network: string;
  contract_address: string;
  mint_fee?: string;
  mint_currency?: string;
  fee_asset?: string;
  asset_amount?: string;
}

export interface FireEventData extends BaseEventData {
  user_address: string;
  network: string;
  contract_address: string;
  asset_amount: string;
  asset_ticker: string;
  additionalEventData?: Record<string, unknown>;
}

export interface FireMintEventArgs {
  user_address: string;
  network: string;
  contract_address: string;
  token_name: string;
  ticker: string;
  token_type: string;
  mint_fee?: string;
  mint_currency?: string;
  fee_asset?: string;
  asset_amount?: string;
  additionalEventData?: Record<string, unknown>;
}

export interface FireEventArgs {
  user_address: string;
  network: string;
  contract_address: string;
  asset_amount: string;
  asset_ticker: string;
  additionalEventData?: Record<string, unknown>;
}

export interface ConnectWalletEventData extends BaseEventData {
  wallet_type: string;
}
