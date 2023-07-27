export type EventTypes = "pageView" | "login" | "mint" | "connectWallet";

export interface Event {
  type: EventTypes;
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

export interface ConnectWalletEventData extends BaseEventData {}
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
