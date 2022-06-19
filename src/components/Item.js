import React from "react";

function Item({ item, onUpdatedItem, onDeletedItem }) {

function handleAddToCartClick(){
  fetch(`http://localhost:4000/items/${item.id}`,{
    method: "PATCH",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInCart: !item.isInCart
    }),
  })
  .then((res)=>res.json())
  .then((updatedItem)=>onUpdatedItem(updatedItem))
}

function handleDeleteClick(){
  fetch(`http://localhost:4000/items/${item.id}`, {
    method: "DELETE",
  })
  .then((res)=>res.json())
  .then(()=> console.log("deleted"))
}



  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleAddToCartClick}>Delete</button>
    </li>
  );
}

export default Item;
