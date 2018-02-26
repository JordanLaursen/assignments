import React from "react";
import Item from "./Item";

function ItemsList(props) {

    const mappedItems = props.groceryItems.items.map(function(currentItem, i) {
        return <Item item={currentItem} key={i+currentItem}/>
    });

    return(
        <ul>
            {mappedItems}
        </ul>
    );
}

export default ItemsList;
