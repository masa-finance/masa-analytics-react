import CookieConsentBanner from "./CookieConsentBanner";
import { useCookieMonster, useEventLogger, useUser } from "./cookiemonster";
import type {
  MessageSigningEventData,
  PageVisitEventData,
} from "./interfaces/EventData";
import { signMessageAndTrack } from "./messageSigningTracker";
import { trackPageVisit } from "./pageVisitTracker";
import { getCookie, setCookie } from "./utils/cookieUtils";

export {
  // consent
  CookieConsentBanner,
  // cookie handling
  setCookie,
  getCookie,
  // signing
  signMessageAndTrack,
  MessageSigningEventData,
  // tracking
  trackPageVisit,
  PageVisitEventData,
  // new cookie monster
  useUser,
  useEventLogger,
  useCookieMonster,
};
