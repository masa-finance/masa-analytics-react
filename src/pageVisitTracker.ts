// src/pageVisitTracker.ts
import axios from 'axios';

// Interface for page visit event data
export interface PageVisitEventData {
  eventType: string;
  accountId: string;
  url: string;
}

// trackPageVisit function sends a page visit event to your API
// @param accountId: string - The unique identifier for the user
// @param apiUrl: string - The API endpoint URL where the event data should be sent
