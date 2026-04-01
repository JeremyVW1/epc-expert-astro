/** Track custom GA4 events for conversion measurement */
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/** Track phone click */
export function trackPhoneClick() {
  trackEvent("phone_click", { event_category: "contact", event_label: "header_phone" });
}

/** Track offerte form submission */
export function trackOfferteSubmit() {
  trackEvent("generate_lead", { event_category: "conversion", event_label: "offerte_form" });
}

/** Track CTA button click */
export function trackCTAClick(location: string) {
  trackEvent("cta_click", { event_category: "engagement", event_label: location });
}

/** Track email click */
export function trackEmailClick() {
  trackEvent("email_click", { event_category: "contact", event_label: "email_link" });
}
