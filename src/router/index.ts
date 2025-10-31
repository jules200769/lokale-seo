
import { useNavigate, type NavigateFunction, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE = navigate;
      navigateResolver(window.REACT_APP_NAVIGATE);
    }
  }, [navigate]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return element;
}
