import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";

export const logPageView = (pathname) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    // Exclude localhost from analytics tracking
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      logEvent(analytics, "page_view", { page_path: pathname });
    }
  }
};
