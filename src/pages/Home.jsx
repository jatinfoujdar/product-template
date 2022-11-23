import React, { useEffect, useState } from 'react'

function Home() {

  const [products , setProducts] = useState([]);

  async function fetchAllProducts(){
    const responce = await fetch('https://fakestoreapi.com/products')
              const result = await responce.json();
              setProducts(result);
    }
  useEffect(()=>{
 fetchAllProducts()
  },[])
 
  return (
    <div>
      <pre>{JSON.stringify(products,null,2)}</pre>
    </div>
  )
}

export default Home