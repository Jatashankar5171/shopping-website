import React from 'react'
import Item from '../comp/Item'
import './Layout.css'
import CartItemSmall from '../comp/CartItemSmall'
import Checkout from '../comp/Checkout'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Product = () => {

    const product = useSelector((state)=>state.product)
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:'FETCH_API',payload:''})
    },[])

  return (
    <>
    <div className='Column-Container'>
        <div className='Category'>
        <h1 className='tt'>All Products</h1>
        </div>
        <div className='Product-List'>
        {
            product===null?"wait": product.map((cur)=>{
                return  <Item data={cur} key={cur.id}/>
            })
        }
        </div>
        <div className='Mini-Cart'>
            <h1 className='tt'>My Cart</h1>
        {
            cart.totalCount===0?"cart is empty": cart.items.map((cur)=>{
                return  <CartItemSmall data={cur.item} key={cur.item.id} count={cur.count}/>
            })
        }
        {
            cart.totalCount===0?"": <Checkout/>
        }
        </div>
    </div>
    </>
  )
}

export default Product