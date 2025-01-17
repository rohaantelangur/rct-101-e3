import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };
  // let { id } = useParams();
  const [products, setproducts] = useState([])
  const [refesh, setrefesh] = useState("")
  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((r)=>setproducts(r.data))
  }, [])

  const { CartItem, setCartItem } = useContext(CartContext);
  


  return (
    <>
    {products.map((item)=>{return(
      
      <div data-cy={`product-${item.id}`} key={item.id}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>setCartItem([...CartItem,{ id:item.id,qty:1}])} >Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>{
          CartItem.map((cItem,ind)=>{
            if(cItem.id === item.id){
              cItem.qty+=1
              setCartItem(CartItem)
              setrefesh(Date.now())
            }
          })
        }} >+</button>
        <span data-cy="product-count">
          {
            
            // CartItem.length
            CartItem.map((cItem,ind)=>{
              if(cItem.id === item.id){
                return cItem.qty;
              }else{
                return "";
              }
            })

          }
          
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{
          CartItem.map((cItem,ind)=>{
            if(cItem.id === item.id){
              cItem.qty-=1
              setCartItem(CartItem)
              setrefesh(Date.now())
            }
          })
        }}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>{
          setCartItem(item)
          CartItem.map((cItem,ind)=>{
            if(cItem.id ===item.id){
              let arr = CartItem.slice(ind)
              setCartItem(arr)
              console.log(cItem,ind)
              setrefesh(Date.now())
            }

          })
        }}>Remove From Cart</button>
        </div>
        </div>
        )})}
     </>
  );
};

export default Product;
