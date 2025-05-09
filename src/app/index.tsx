import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import '@assets/styles/global.css';
import '@assets/styles/fonts.css';
import '@assets/styles/reset.css';
import ErrorBoundary from "@shared/ui/components/ErrorBoundary";
import { AuthProvider } from "@app/providers/AuthProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import Routing from "../pages";
import { isDevelopment } from "../shared/utils/env";
import { AppThemeProvider } from "@app/providers/AppThemeProvider";


ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <StyleSheetManager enableVendorPrefixes={isDevelopment()}>
        <AppThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <Provider store={store}>
                <Routing />
              </Provider>
            </BrowserRouter>
          </AuthProvider>
        </AppThemeProvider>
      </StyleSheetManager>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);
