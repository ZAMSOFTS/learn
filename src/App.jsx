import React, { useState } from "react";
import "./index.css";

const itemPrices = {
  apple: 100,
  banana: 200,
  carrot: 80,
  tomato: 70,
  avocado: 250,
  blueberry: 400,
  broccoli: 120,
  cabbage: 60,
  cantaloupe: 80,
  cauliflower: 100,
  cherry: 600,
  cucumber: 40,
  eggplant: 90,
  grape: 300,
  honeydew: 70,
  kiwi: 150,
  lemon: 90,
  lettuce: 50,
  mango: 180,
  onion: 30,
  orange: 120,
  peach: 200,
  pear: 180,
  pineapple: 120,
  potato: 20,
  raspberry: 500,
  spinach: 70,
  strawberry: 350,
  watermelon: 40,
  zucchini: 80,
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
          <option value="avocado">Avocado</option>
          <option value="blueberry">Blueberry</option>
          <option value="broccoli">Broccoli</option>
          <option value="cabbage">Cabbage</option>
          <option value="cantaloupe">Cantaloupe</option>
          <option value="cauliflower">Cauliflower</option>
          <option value="cherry">Cherry</option>
          <option value="cucumber">Cucumber</option>
          <option value="eggplant">Eggplant</option>
          <option value="grape">Grape</option>
          <option value="honeydew">Honeydew</option>
          <option value="kiwi">Kiwi</option>
          <option value="lemon">Lemon</option>
          <option value="lettuce">Lettuce</option>
          <option value="mango">Mango</option>
          <option value="onion">Onion</option>
          <option value="orange">Orange</option>
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
