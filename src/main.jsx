import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Store from "./store/index.js";
import Quotes from "./components/quotes.jsx";
import FavItems from "./components/favItems.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/quotes", element: <Quotes /> },
      { path: "/favourite", element: <FavItems /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
