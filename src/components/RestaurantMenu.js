import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuGroup from "./MenuGroup";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import useRestaurantMenu from "../hooks/useRestaurentMenu";
import { BsFillStarFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resDetails, filteredMenuGroups, setFilteredMenuGroups] =
    useRestaurantMenu(resId);

  if (resDetails === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
  } = resDetails?.cards[0]?.card?.card?.info;

  const menuGroups =
    resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const onVegOnlyChange = (checked) => {
    if (checked) {
      let filteredGroups = menuGroups.slice();
      filteredGroups = filteredGroups.reduce((prev, current) => {
        if (
          current.card.card.itemCards &&
          current.card.card.itemCards.length > 0
        ) {
          let cardObj = {
            card: {
              card: {
                title: current.card.card.title,
              },
            },
          };
          const vegCards = current.card.card.itemCards.filter((card) => {
            if (card.card.info.itemAttribute.vegClassifier === "VEG") {
              return true;
            }
          });

          cardObj.card.card.itemCards = vegCards;

          prev.push(cardObj);
        }

        return prev;
      }, []);

      setFilteredMenuGroups(filteredGroups);
    } else {
      setFilteredMenuGroups(menuGroups);
    }
  };

  return (
    <div className="w-4/5 pl-[16.67%] mt-8">
      <div className="flex justify-between">
        <div>
          <div className="font-bold text-lg">{name}</div>
          <div className="text-sm text-gray-500 pt-0.5">
            {cuisines.join(", ")}
          </div>
          <div className="text-sm text-gray-500 pt-0.5">
            {areaName}, {sla.lastMileTravelString}
          </div>
        </div>
        <div className="res-rating border-[1px] border-solid border-gray-200 rounded-md p-2">
          <div className="flex ml-2">
            <BsFillStarFill className="fill-green-600 w-4 h-4 mt-0.5" />
            <div className="text-green-600 text-sm font-bold pl-1 pt-0.5">
              {avgRating}
            </div>
          </div>
          <div className="border-[0.5px] border-solid border-gray-200 my-3"></div>
          <div className="text-xs text-gray-600">{totalRatingsString}</div>
        </div>
      </div>
      <div className="border-[1px] border-dashed border-gray-200 my-3"></div>
      <div className="flex w-1/4 justify-between mx-3">
        <div className="flex">
          <CgSandClock className="h-6 w-6" />
          <div className="font-bold text-sm pt-0.5">{sla.slaString}</div>
        </div>
        <div className="flex">
          <HiOutlineCurrencyRupee className="h-6 w-6" />
          <div className="font-bold text-sm ml-2 pt-0.5">
            {costForTwoMessage}
          </div>
        </div>
      </div>
      <div className="my-3 mx-4">
        <ToggleSwitch
          label="Veg Only"
          onToggleChange={onVegOnlyChange}></ToggleSwitch>
      </div>
      <div className="border-[1px] border-dashed border-gray-200 my-3"></div>
      <div className="res-menu">
        {filteredMenuGroups.map((group) => {
          if (
            group.card.card.itemCards &&
            group.card.card.itemCards.length > 0
          ) {
            return (
              <div key={group.card.card.title}>
                <MenuGroup
                  key={group.card.card.title}
                  group={group.card.card}></MenuGroup>
                <div className="h-3 bg-gray-100"></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
