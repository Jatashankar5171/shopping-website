import React from 'react'
import { useDispatch } from 'react-redux'
import './Item.css'

const Item = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='Item-Container' >
        <div className='Image-Container'>
            <img src={props.data.image} alt='product' />
        </div>
        <div className='Item-Details'>
            <h1>{props.data.title}</h1>
            <h1>{props.data.price}</h1>
            <h2>{props.data.description}</h2>
        </div>
        <div className='Button-Container'>
            <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:props.data})}>Add</button>
        </div>
    </div>
  )
}

export default Item