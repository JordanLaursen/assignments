import React from "react";
import Item from "./Item";

const ItemsList = (props) => {
    const mappedList = props.groceryItems.items.map((currentItem, i) => {
        return <Item item={currentItem} key={i + currentItem}/>
    })
    return(
        <ul>
            {mappedList}
        </ul>
    )
}

export default ItemsList;
