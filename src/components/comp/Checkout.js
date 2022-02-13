import React from 'react'
import { useDispatch } from 'react-redux'
const Checkout = () => {
    const dispatch = useDispatch()
     const style = {
         width:"90%",
         backgroundColor:"coral",
         height: "48px",
         margin: "16px",
         fontSize: "18px",
         letterSpacing: "1px"
     }
  return (
    <button style={style} onClick={()=>dispatch({type:'CHECKOUT',payload:''})} >Checkout</button>
  )
}

export default Checkout