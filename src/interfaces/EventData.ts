// Define the structure of the event data for message signing
export interface MessageSigningEventData {
  eventType: string;
  accountId: string;
  message: string;
  signature: string;
}

// Interface for page visit event data
export interface PageVisitEventData {
  eventType: string;
  accountId: string;
  url: string;
}

export interface Event {
  type: string;
  user_address: string;
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
