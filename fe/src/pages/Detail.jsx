import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";


function Detail() {

    const [products, setProducts] = useState([]);

    let { id } = useParams();


  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/"+id);
    const data = await res.json();

    setProducts(data);
  }
  return (
   <>
   
 

        
        <img src={products.image} alt="" />
        <p>{products.title}</p>
        <span>{products.desc}</span>
        <p>{products.price}</p>

   </>
  )
}

export default Detail