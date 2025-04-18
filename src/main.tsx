import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import { Provider } from "react-redux";
import store from "./store/Store.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  </BrowserRouter>
);
