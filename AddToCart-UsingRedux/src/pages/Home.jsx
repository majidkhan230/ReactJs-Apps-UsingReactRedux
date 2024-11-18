import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch({
      type: "addtocart",
      payload: item,
    });
  };

  console.log(useSelector((state) => state));
  const { allproducts } = useSelector((state) => state);
  console.log(allproducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.in/api/products");
        const data = res?.data?.products;
        // console.log(data.products)
        setLoading(false);
        dispatch({
          type: "allproducts",
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div id="loading">
          <span>Loading</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-col-2  mx-4 mt-4 ">
          {allproducts.map((item, index) => {
            return (
              <Card key={index} item={item} handleAddToCart={handleAddToCart} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
