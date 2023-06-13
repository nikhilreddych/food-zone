import MenuCard from "./MenuCard";

const MenuGroup = ({ group }) => {
  return (
    <div className="menu-group">
      <div className="font-bold text-lg my-2">
        {group.title} ({group.itemCards.length})
      </div>
      {group.itemCards.map((card) => {
        return <MenuCard key={card.card.info.id} itemCard={card}></MenuCard>;
      })}
    </div>
  );
};

export default MenuGroup;
