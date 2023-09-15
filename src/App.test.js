import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

test("renders App", () => {
  const persistor = persistStore(Store);

  render(
    <BrowserRouter>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
  screen.debug();
});
