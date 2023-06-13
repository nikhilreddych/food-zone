import { useState } from "react";
import MenuCard from "./MenuCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MenuGroup = ({ group }) => {
  const [isGroupExpanded, setIsGroupExpanded] = useState(true);
  return (
    <div>
      <div
        className="flex justify-between cursor-pointer mx-4"
        onClick={() => {
          setIsGroupExpanded(!isGroupExpanded);
        }}>
        <div className="font-bold text-lg my-2">
          {group.title} ({group.itemCards.length})
        </div>
        {isGroupExpanded ? (
          <IoIosArrowUp className="h-6 w-6 m-2" />
        ) : (
          <IoIosArrowDown className="h-6 w-6 m-2" />
        )}
      </div>
      {isGroupExpanded ? (
        group.itemCards.map((card) => {
          return (
            <div key={card.card.info.id} className="mx-4">
              <MenuCard key={card.card.info.id} itemCard={card}></MenuCard>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuGroup;
