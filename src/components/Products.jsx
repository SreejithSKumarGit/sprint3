import React from "react";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const [data,setData]=React.useState();
  React.useEffect(
    ()=>
    {
      fetch(`http://localhost:8080/products`)
      .then((res)=>res.json())
      .then((res)=>{
        setData(res)
      })
      .catch((error)=>
      {
        console.log(error)
      })
    },[]
  )

  return <div>
    <h1>Product</h1>

    <ProductItem data={data}/>
  </div>;
};

export default Products;
