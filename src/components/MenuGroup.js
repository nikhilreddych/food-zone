import MenuCard from "./MenuCard";

const MenuGroup = ({group}) => {
    return (
        <div className="menu-group">
            <h2>{group.title} ({group.itemCards.length})</h2>
            {group.itemCards.map((card) => {
                return <MenuCard key={card.card.info.id} itemCard={card}></MenuCard>
            })}
        </div>
    )
}

export default MenuGroup;