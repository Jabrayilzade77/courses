import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider'

function Basket() {
    const {basket,addBasket,removeBasket,decBasket} = useContext(BasketContext)
  return (
    <>
    {basket.map(x=>(
        <div key={x._id}>
            <img src={x.image} alt="" />
            <p>{x.title}</p>
            <span>{x.desc}</span>
            <p>{x.price}</p>
            <p>{x.count}</p>
            <button onClick={()=>addBasket(x)}>+</button>
            <button onClick={()=>decBasket(x)}>-</button>
    
            <button onClick={()=>removeBasket(x)}>remove basket</button>
        </div>
      ))}
    </>
  )
}

export default Basket