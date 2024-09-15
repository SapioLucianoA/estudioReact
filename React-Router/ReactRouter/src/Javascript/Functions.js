import { NAVIGATION_EVENT } from "../const/const";

export function Navigation(href) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(NAVIGATION_EVENT.GO_TO_PAGE);
  window.dispatchEvent(navigationEvent);
}