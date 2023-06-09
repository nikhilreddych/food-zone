import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuGroup from "./MenuGroup";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import useRestaurantMenu from "../hooks/useRestaurentMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [resDetails, filteredMenuGroups, setFilteredMenuGroups] = useRestaurantMenu(resId);

    if(resDetails === null) {
        return <Shimmer />
    }

    const { name, cuisines, areaName, avgRating, totalRatingsString, costForTwoMessage, sla} = resDetails?.cards[0]?.card?.card?.info;

    const menuGroups = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const onVegOnlyChange = (checked) => {
        if(checked) {
            let filteredGroups = menuGroups.slice();
            filteredGroups = filteredGroups.reduce((prev, current) => {
                if(current.card.card.itemCards && current.card.card.itemCards.length > 0) {
                    let cardObj = {
                        card: {
                            card: {
                                title: current.card.card.title
                            }
                        }
                    };
                    const vegCards = current.card.card.itemCards.filter((card) => {
                        if(card.card.info.itemAttribute.vegClassifier === 'VEG') {
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
    }

    return (
        <div className="res-details">
            <div className="res-info-card">
                <div className="res-info">
                    <h1>{name}</h1>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div className="res-rating">
                    <h2 style={{color: "green"}}>{avgRating}</h2>
                    <div className="horizontal-line"></div>
                    <p>{totalRatingsString}</p>
                </div>
            </div>
            <div className="dotted-line"></div>
            <div>
                <h4>{sla.slaString} &nbsp; &nbsp; &nbsp; {costForTwoMessage}</h4>
            </div>
            <ToggleSwitch label="Veg Only" onToggleChange={onVegOnlyChange}></ToggleSwitch>
            <div className="res-menu">
                {filteredMenuGroups.map((group) => {
                    if(group.card.card.itemCards && group.card.card.itemCards.length > 0) {
                        return <MenuGroup key={group.card.card.title} group={group.card.card}></MenuGroup>
                    }
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;