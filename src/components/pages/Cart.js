import React from 'react'
import CartItem from '../comp/CartItem'
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  return (
    <div className="Cart">
      <h1 style={{color:"Blue"}}>Cart</h1>
    {
      cart.totalCount===0?"cart is empty": cart.items.map((cur)=>{
        return  <CartItem data={cur.item} key={cur.item.id} count={cur.count} />
      })
    }
    {
      cart.totalCount===0?"": <button className='Checkout' onClick={()=>dispatch({type:'CHECKOUT',payload:''})} >Checkout</button>
    }
    </div>
  )
}

export default Cart