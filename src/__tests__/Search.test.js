import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../store/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("test shimmer on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(15);
});

test("test restaurants on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("search for restaurants on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));

  const searchInput = body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "Sri",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});

test("Show only Top rated restaurants on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));

  const topRatedBtn = body.getByTestId("top-rated-btn");

  fireEvent.click(topRatedBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(13);
});
