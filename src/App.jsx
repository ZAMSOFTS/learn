import React, { useState } from "react";
import "./index.css";

const itemPrices = {
  apple: 10,
  banana: 15,
  carrot: 5,
  tomato: 20,
};

function App() {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState({
    name: "",
    price: "",
    weight: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function addItem() {
    const newItem = {
      name: item.name,
      price: itemPrices[item.name] * item.weight,
      weight: item.weight,
    };
    setItemList((prevItems) => [...prevItems, newItem]);
    setItem({ name: "", price: "", weight: "" });
    alert("Item added!");
  }

  const totalPrice = itemList.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Welcome to My Shop</h1>
      <form>
        <label htmlFor="item-select">Select an item:</label>
        <select
          id="item-select"
          name="name"
          value={item.name}
          onChange={handleChange}
        >
          <option value="">Select an item</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="carrot">Carrot</option>
          <option value="tomato">Tomato</option>
        </select>
        {item.name && (
          <div>
            <label>Price per KG (PKR): {itemPrices[item.name]}</label>
          </div>
        )}
        <br />
        <label htmlFor="item-weight">Weight in KG:</label>
        <input
          type="number"
          id="item-weight"
          name="weight"
          value={item.weight}
          onChange={handleChange}
        />
        <br />
        <button type="button" onClick={addItem}>
          Add Item
        </button>
      </form>
      {itemList.map((item, index) => (
        <p key={index}>
          {item.name} - {item.price.toFixed(2)} PKR
        </p>
      ))}
      <h2>Total Price: {totalPrice.toFixed(2)} PKR</h2>
    </div>
  );
}

export default App;
