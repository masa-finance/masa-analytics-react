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

export interface PageViewEventData extends BaseEventData {
  page: string;
}

export interface MintEventData extends BaseEventData {
  contract_address: string;
  network: string;
}
