import axios from "axios";

import type { PageVisitEventData } from "./interfaces/EventData";

// Function to send a page visit event to your API
export const trackPageVisit = (
  accountId: string,
  apiUrl: string,
  pageName?: string,
  additionalData?: Record<string, object>,
) => {
  const pageUrl = window.location.href;
  const eventData: PageVisitEventData = {
    eventType: "pageVisit",
    accountId: accountId,
    url: pageUrl,
    ...additionalData,
  };

  // Send the event data to the API endpoint
  axios
    .post(apiUrl, eventData)
    .then((response) => {
      console.log("Event data sent to API:", response.data);
    })
    .catch((error) => {
      console.error("Error sending event data to API:", error);
    });
};
