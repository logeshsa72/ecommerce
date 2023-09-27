
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductListItem from "../component/ProductListItem";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../Data/ProductList";


export default function Checkout() {
  const params = useParams()

  const list = useSelector((state) => state.cart.list);
  
  const [state, setState] = useState(
    params.id ? 
    [
      {
        ...ProductList.find(
          (element) =>element.id === parseInt(params.id)
          ), 
          count: 1,},]: list
    
    );

  const navigate = useNavigate();

  const incrementItem = (item) => {
    
    const index = state.findIndex(
      (product) => product.id === item.id
    );

    setState((state ) =>[
      ...state.slice(0, index),
      {...item, count: item.count + 1},
      ...state.slice(index + 1),
    ])
  };

  const decrementItem = (item) => {
    if(item.count === 1) {
       removeItemFromCart (item);
    }
    else{
      const index = state.findIndex(
        (product) => product.id === item.id
      );
  
      setState((state ) =>[
        ...state.slice(0, index),
        {...item, count: item.count - 1},
        ...state.slice(index + 1),
      ])
    }

   
  };
  const removeItemFromCart = (item) => {
    const index = state.list.findIndex(
      (product) => product.id === item.id
    );

    setState((state ) =>[
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ])   };

  
  return (
    <>
      {state.length > 0 ? (
      <>
      {state.map((item) => (
        <ProductListItem
        
          {...item}
          key={item.id}
          incrementItem={() => incrementItem(item)}
          decrementItem={() => decrementItem(item)}

          removeItem= {() =>removeItemFromCart(item)}
        />
      ))}
      <button className="align-items-center btn btn-success"onClick={() => navigate('/success')}>Place Order</button>
      </>
      ):(<h3>No Items in the cart</h3>)
       }
    </>
  );
}
