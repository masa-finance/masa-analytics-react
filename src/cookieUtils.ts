/**
 * Set a cookie with the given name, value, and expiration time (in days).
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 */
export const setCookie = (name: string, value: string, days: number): void => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

/**
 * Get the value of a cookie with the given name.
 *
 * @param {string} name - The name of the cookie.
 * @returns {string} - The value of the cookie, or an empty string if the cookie is not found.
 */
export const getCookie = (name: string): string => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // Remove any leading whitespace from the current cookie string.
    while (c.charAt(0) === " ") c = c.substring(1, c.length);

    // Check if the current cookie string starts with the target cookie name.
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
};
