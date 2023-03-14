import React, { useState } from "react";
import "./index.css";
import backgroundImage from "./images/circ.jpg";
const App = () => {
  const [items, setItems] = useState([
    { name: "Apple", buyingPrice: 100, sellingPrice: 150 },
    { name: "Carrot", buyingPrice: 50, sellingPrice: 75 },
  ]);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemBuyingPrice, setNewItemBuyingPrice] = useState("");
  const [newItemSellingPrice, setNewItemSellingPrice] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const handleItemAddToCart = (weight) => {
    const existingCartItem = cart.find(
      (item) => item.name === selectedItem.name
    );

    if (existingCartItem) {
      const updatedCart = cart.map((item) => {
        if (item.name === selectedItem.name) {
          return {
            ...item,
            weight: parseFloat(item.weight) + parseFloat(weight),
            totalCost:
              parseFloat(item.totalCost) +
              parseFloat(weight * selectedItem.sellingPrice),
            profit:
              (parseFloat(item.weight) + parseFloat(weight)) *
                selectedItem.sellingPrice -
              (parseFloat(item.weight) + parseFloat(weight)) *
                selectedItem.buyingPrice,
          };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      const newCartItem = {
        name: selectedItem.name,
        weight: weight,
        profit:
          weight * selectedItem.sellingPrice -
          weight * selectedItem.buyingPrice,
        totalCost: weight * selectedItem.sellingPrice,
      };
      setCart([...cart, newCartItem]);
    }

    setOrderCompleted(true);
  };

  const handleNextOrder = () => {
    setCart([]);
    setOrderCompleted(false);
    setTotalOrders(totalOrders + 1);
    setTotalProfit(totalProfit + netProfit);
    setTotalSales(totalSales + totalCost);
  };

  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    if (!newItemName || !newItemBuyingPrice || !newItemSellingPrice) {
      alert("Please fill in all fields");
      return;
    }
    const newItem = {
      name: newItemName,
      buyingPrice: newItemBuyingPrice,
      sellingPrice: newItemSellingPrice,
    };

    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemBuyingPrice("");
    setNewItemSellingPrice("");
  };

  const netProfit = cart.reduce((acc, cur) => acc + cur.profit, 0);
  const totalCost = cart.reduce((acc, cur) => acc + cur.totalCost, 0);
  const numberOfOrders = cart.length;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <h1>SHAQEEL STORE</h1>
      <div>
        <label>
          Item:
          <select
            value={selectedItem.name}
            onChange={(e) =>
              setSelectedItem(
                items.find((item) => item.name === e.target.value)
              )
            }
          >
            {items.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            defaultValue={1}
            min={0}
            step={0.1}
            ref={(input) => (selectedItem.weightInput = input)}
          />
        </label>
        <button
          onClick={() => handleItemAddToCart(selectedItem.weightInput.value)}
        >
          Add to cart
        </button>
        {orderCompleted && (
          <button onClick={handleNextOrder}>Next Order</button>
        )}
      </div>
      <div>
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight (kg)</th>
              <th>Total Cost</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.weight}</td>
                <td>{item.totalCost.toFixed(2)}</td>
                <td>{item.profit.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{totalCost.toFixed(2)}</td>
              <td>{netProfit.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <form onSubmit={handleNewItemSubmit}>
        <h1>Add Custom Item</h1>
        <label>
          Name:
          <input
            type="text"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </label>
        <label>
          Buying Price:
          <input
            type="number"
            value={newItemBuyingPrice}
            onChange={(event) => setNewItemBuyingPrice(event.target.value)}
          />
        </label>
        <label>
          Selling Price:
          <input
            type="number"
            value={newItemSellingPrice}
            onChange={(event) => setNewItemSellingPrice(event.target.value)}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <div>
        <p>Total Orders - {totalOrders}</p>
        <p> Total Profit - {totalProfit}</p>
        <p> Total Sales - {totalSales}</p>
      </div>
    </div>
  );
};

export default App;
