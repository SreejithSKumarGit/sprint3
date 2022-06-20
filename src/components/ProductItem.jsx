import React from "react";


const ProductItem = ({data}) => {
  return (
  <>
    <h1>Product Items</h1>
    {
      data?.map((item)=>(
        <div style={{border:"1px solid black", textAlign:"center"}}>
        <h3>{item.name}</h3>
        <h3>{item.description}</h3>
        <button>Add to cart</button>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Remove</button>

        </div>
      ))
    }
 </>
  )
};

export default ProductItem;
