export interface User {
  address: string;
}

export interface Event {
  type: string;
  user_address: string;
  timestamp: Date;
  event_data: EventData;
}

export interface EventData {
  description: string;
  date: string;
}
