import React from "react";

function Card({ item, handleAddToCart }) {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[450px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 mt-4">
      <img
        className="w-full h-48 object-cover"
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{item.title.slice(0,10)}</h2>
          <p className="text-gray-600 text-sm my-2 line-clamp-3">{item.description}</p>
          <p className="text-gray-700 font-bold text-lg">${item.price}</p>
          <p className="text-gray-500 text-sm">Category: {item.category}</p>
          {/* <p className="text-gray-500 text-sm">
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </p> */}
        </div>
        <button
          onClick={()=>handleAddToCart(item)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
