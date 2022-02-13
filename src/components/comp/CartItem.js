import React from 'react'
import { useDispatch } from 'react-redux'
import './CartItem.css'

const CartItem = (props) => {
  const dispatch =useDispatch()
  return (
    <div className='Cart-Item'>
      <img src={props.data.image}/>
      <div className='Item-Details-Small'>
        <h1>{props.data.title}</h1>
        <h1>{props.data.price}</h1>
      </div>
      <div className='Item-Counts'>
      <div className='Button-Container-Small'>
        <button onClick={()=>dispatch({type:'DEC_COUNT',payload:props.data.id})} >➖</button>
        <h1>{props.count}</h1>
        <button onClick={()=>dispatch({type:'INC_COUNT',payload:props.data.id})} >➕</button>
      </div>
      <div className='Total-Amount-Small'>
        <h1>{(props.data.price*props.count).toFixed(2)}</h1>
      </div>
      </div>
    </div>
  )
}

export default CartItem