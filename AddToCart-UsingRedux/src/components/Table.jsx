import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Table = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        setCartItems(
          data.map((item) => ({
            id: item.id,
            name: item.title,
            price: item.price,
            quantity: 1,
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto mt-8  bg-white text-black">
      <table className="w-full border-collapse border border-gray-300 ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">${item.price}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
