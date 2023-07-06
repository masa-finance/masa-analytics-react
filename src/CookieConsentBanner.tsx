import React, { useEffect, useState } from "react";

import { getCookie, setCookie } from "./utils/cookieUtils";

// Define the prop types for the CookieConsentBanner component.
interface CookieConsentBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

/**
 * CookieConsentBanner component.
 *
 * This component displays a banner requesting the user's consent for using cookies.
 * When the user accepts or declines, the banner is hidden and the user's choice is saved
 * in a 'userConsent' cookie. The component also accepts optional callbacks for handling
 * the user's acceptance or rejection of cookies.
 */
const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onAccept,
  onDecline,
}) => {
  // Create a state to control the visibility of the consent banner.
  const [visible, setVisible] = useState(false);

  // Check the user's consent status when the component mounts.
  useEffect(() => {
    const consent = getCookie("userConsent");
    // If the userConsent cookie is not set, display the consent banner.
    if (consent === "") {
      setVisible(true);
    }
  }, []);

  // Handle the user clicking the "Accept" button.
  const handleAccept = () => {
    setVisible(false);
    setCookie("userConsent", "true", 365);
    onAccept?.();
  };

  // Handle the user clicking the "Decline" button.
  const handleDecline = () => {
    setVisible(false);
    setCookie("userConsent", "false", 365);
    onDecline?.();
  };

  // If the consent banner is not visible, render nothing.
  if (!visible) {
    return null;
  }

  // Render the consent banner with the cookie consent message and buttons.
  return (
    <div>
      <p>
        We use cookies to improve your experience on our website. By browsing
        this website, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsentBanner;
