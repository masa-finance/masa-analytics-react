// src/index.ts

// Export the CookieConsentBanner component to display a cookie consent banner
export { CookieConsentBanner } from './CookieConsentBanner';

// Export utility functions for working with cookies (set, get, and delete)
export { setCookie, getCookie, deleteCookie } from './cookieUtils';

// Export the signMessageAndTrack function and the MessageSigningEventData interface
// for tracking signed messages and sending event data to an API
export { signMessageAndTrack, MessageSigningEventData } from './messageSigningTracker';

export { trackPageVisit, PageVisitEventData } from './pageVisitTracker';
