import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Drawer from './Drawer';
function Header() {
  const {addtocart} = useSelector((state)=>state)
const [openDrawer,setOpenDrawer] = useState(false)
  const handleClick = ()=>{
    setOpenDrawer(true)
  }
  
  return (
    <div className='w-full h-[60px] bg-gray-600 sticky top-0 text-white text-lg flex justify-between items-center px-20'>
<div className="logo font-bold text-xl">Logo</div>
{!openDrawer ? <div className="container w-fit relative">
  <div className="circle w-6 h-6 bg-red-500 text-sm flex justify-center items-center rounded-full  absolute -top-4 right-3">{addtocart.length}</div>
<FaCartArrowDown size={24} onClick={()=>handleClick()}/>
</div> : null }

{openDrawer ? <Drawer setOpenDrawer={setOpenDrawer} /> : ""}

    </div>
  )
}

export default Header