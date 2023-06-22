import Header from "../components/Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { StaticRouter } from "react-router-dom/server";

test("test if logo rendered on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("header-logo");

  expect(logo.src).toBe("http://localhost/[object%20Object]");
});

test("test if cart has 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart-items");

  expect(cart.innerHTML).toBe("0");
});

test("test if user name displayed with Dummy Name", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("user-name");

  expect(cart.innerHTML).toBe("Welcome back, Dummy Name");
});
