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
