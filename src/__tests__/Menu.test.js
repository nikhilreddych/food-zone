import { render, waitFor } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../store/store";
import { MENU_DATA } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Res Name and detail loading on click of restaurant", async () => {
  const resMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(resMenu.getByTestId("res-name")));

  const resName = resMenu.getByTestId("res-name");
  const resDetail = resMenu.getByTestId("res-detail");

  expect(resName.innerHTML).toBe("A2B - Adyar Ananda Bhavan");
  expect(resDetail.innerHTML).toBe("Btm Layout, 3.0 km");
});

test("Restaurant Menu is loading", async () => {
  const resMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(resMenu.getByTestId("res-menu")));

  const resMenuCards = resMenu.getByTestId("res-menu");

  console.log(resMenuCards);

  expect(resMenuCards.children.length).toBe("A2B - Adyar Ananda Bhavan");
});
