import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import '../src/core/styles/fonts.css';
import '../src/core/styles/fonts.css';
import '../src/core/styles/global.css';
import ErrorBoundary from "../src/core/components/ErrorBoundary";
import Layout from "../src/core/components/Layout";
import { isDevelopment } from "../src/core/utils/env";
import Routing from "./pages";

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <StyleSheetManager enableVendorPrefixes={isDevelopment()}>
        <BrowserRouter>
          <Layout>
            <Routing />
          </Layout>
        </BrowserRouter>
      </StyleSheetManager>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root")
);
