import { RES_MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useRestaurantMenu = (resId) => {
    const [resDetails, setResDetails] = useState(null);
    const [filteredMenuGroups, setFilteredMenuGroups] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const json = await useFetch(RES_MENU_URL + resId);

        const menuGroups = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        setFilteredMenuGroups(menuGroups);

        setResDetails(json.data);
    }

    return [resDetails, filteredMenuGroups, setFilteredMenuGroups];
}

export default useRestaurantMenu;