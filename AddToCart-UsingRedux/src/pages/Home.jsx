import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // const [products, setProducts] = useState([]);

  
const dispatch = useDispatch()
  const handleAddToCart =(item)=>{
      dispatch({
        type:"addtocart",
        payload:item
      })
}

console.log(useSelector((state)=>state))
const {allproducts} = useSelector((state)=>state)
console.log(allproducts)



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.in/api/products");
        const data = res?.data?.products;
        // console.log(data.products)
        dispatch({
          type:"allproducts",
          payload: data,
        })
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 mx-4 mt-4 ">
      {allproducts.map((item, index) => {
        return (
        <Card key={index} item={item} handleAddToCart={handleAddToCart} />
        );
      })}
    </div>
  );
}

export default Home;
