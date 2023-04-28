import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from './cookieUtils';

// Define the prop types for the CookieConsentBanner component.
interface CookieConsentBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

// CookieConsentBanner component for displaying a cookie consent banner.
const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  // Set default callback functions for onAccept and onDecline props.
  onAccept = () => {},
  onDecline = () => {},
}) => {
  // Create a state to control the visibility of the consent banner.
  const [visible, setVisible] = useState(false);

  // Check the user's consent status when the component mounts.
  useEffect(() => {
    const consent = getCookie('userConsent');
    // If the userConsent cookie is not set, display the consent banner.
    if (consent === '') {
      setVisible(true);
    }
  }, []);

  // Handle the user clicking the "Accept" button.
  const handleAccept = () => {
    setVisible(false);
    setCookie('userConsent', 'true', 365);
    onAccept();
  };

  // Handle the user clicking the "Decline" button.
  const handleDecline = () => {
    setVisible(false);
    setCookie('userConsent', 'false', 365);
    onDecline();
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
