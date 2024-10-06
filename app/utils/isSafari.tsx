export default function IsSafari() {
  if (typeof window !== "undefined") {
    const userAgent = window.navigator.userAgent;
    const isChrome = userAgent.indexOf("Chrome") > -1;
    const isSafari = userAgent.indexOf("Safari") > -1;
    return isSafari && !isChrome;
  }
  return false; // Default to false if not in a browser environment
}
