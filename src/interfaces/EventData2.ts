export interface User {
  address: string;
}

export interface Event {
  type: string;
  user_address: string;
  event_data: {
    description: string;
    date: string;
  };
}

export interface EventData {
  description: string;
  date: string;
}
