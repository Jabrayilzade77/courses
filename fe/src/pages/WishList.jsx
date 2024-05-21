import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider'
import { WishListContext } from '../context/WishListProvider'

function WishList() {
    const {wishList,addwishList,isExitsWishList} = useContext(WishListContext)
  return (
    <>
    {wishList.map(x=>(
        <div key={x._id}>
            
<button onClick={()=>addwishList(x)}>{isExitsWishList(x) ? <i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}</button>
    
            <img src={x.image} alt="" />
            <p>{x.title}</p>
            <span>{x.desc}</span>
            <p>{x.price}</p>
    
            <button onClick={()=>addBasket(x)}>remove wishList</button>
        </div>
      ))}
    </>
  )
}

export default WishList