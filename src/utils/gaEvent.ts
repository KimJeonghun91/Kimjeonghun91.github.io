type EventValue = string | number | boolean;
type EventParams = Record<string, EventValue | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: EventParams) => void;
  }
}

export function trackGAEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as EventParams;

  window.gtag('event', eventName, cleanedParams);
}
