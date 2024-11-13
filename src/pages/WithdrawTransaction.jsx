import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function WithdrawTransaction() {
  const [inputValue,setValue] = useState('')
  const dispatch = useDispatch()
  const amount = useSelector((state)=>state.amount)
  console.log(amount)
  
  return (
    <div>
    <p>Your current cash  after withdraw is : {amount}</p>
    <label htmlFor="">Amount:</label>
      <input className='border-2 border-black rounded-md mx-2 my-2 ' type="text" placeholder='enter amount' value={inputValue} onChange={(e)=>setValue(e.target.value)} />
      <button className='px-4 py-1 rounded-full bg-blue-500 font-bold text-center text-white'  onClick={()=>dispatch({type:"withdraw",payload:Number(inputValue)})}>Widraw</button>
      </div>
  )
}

export default WithdrawTransaction