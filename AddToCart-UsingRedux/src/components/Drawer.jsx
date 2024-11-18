import React, { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Drawer = ({ setOpenDrawer }) => {
  const addtocart = useSelector((state) => state.addtocart);
  const dispatch = useDispatch();
  console.log(addtocart);

  const handleDeleteIcon =  (item)=>(
    dispatch({
      type:"removeaddtocart",
      payload:item,
    })
  )
  
  // useEffect(() => {
  //   if (addtocart.length === 0) {
  //     setOpenDrawer(false);
  //   }
  // }, [addtocart]);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-auto bg-black bg-opacity-50 z-50">
      <div className="lg:max-w-96  w-full bg-white h-full p-4 scroll-mx-10 overflow-y-auto">
        <IoCloseCircleOutline
          onClick={() => setOpenDrawer(false)}
          className="text-2xl text-gray-800 cursor-pointer"
        />

        <div className="mt-8">
          {addtocart.length === 0 ? (
            <p className="text-center text-lg text-gray-600">
              Your cart is empty.
            </p>
          ) : (
            addtocart.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100  rounded-lg shadow-lg p-4 mb-4 flex relative"
              >
                <div onClick={()=>handleDeleteIcon(item)} className="delete text-2xl absolute  hover:cursor-pointer p-1 top-0 right-0 border-2 rounded-full bg-red-500" ><MdDelete/></div>
                <div className="left w-2/3">
                  {" "}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title.slice(0,19)}
                  </h3>
                  <p className="text-gray-600 mt-1  min-h-fit">
                    {item.description.slice(0, 30)}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold ">
                      ${item.price}
                    </span>
                  </div>
                </div>
                <div className="right w-1/3 ">
                  <img src={item.image} className="object-contain " alt="" />
                 
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="delete"><MdDelete/></div>
    </div>
  );
};

export default Drawer;
