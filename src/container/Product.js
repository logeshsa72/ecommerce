import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../Data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {
const params = useParams();
const navigate = useNavigate();
const dispatch = useDispatch()

const props = ProductList.find((element)=>element.id === parseInt(params.id));
const [alert, setAlert] = useState(false)


const list = useSelector((state) => state.cart.list);
const element = list.find((item)=> item.id === props.id)

 
const addToCart=()=>{
  dispatch(addItem(props))
   setAlert(true);
   setTimeout(() => setAlert(false),3000)
  

}
  return (
    <div className='card m-2' >
      {alert && <span className='alert alert-success'>Item added to cart</span>}
    <div className='mt-2 text-center'>
    <img src={props.images} height={200} width={200} alt={props.tittle} className='border-radius-9' />
  
    <div className='card-body'>
      <h5 className='card-tittle'>{props.tittle}</h5>
      <h6 className='mt-2'>Price: {`${props.Price}`}</h6>
      <h6 className='mt-2'>{props.category}</h6>
      <div className='mt-4'>
      {props.stock > 0 ?
      (<>
      <button className='btn btn-success'onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button>
      {element?.count > 0 ? 
            <button className='ms-3 btn btn-outline-warning' onClick={()=>navigate('/cart')}>Go to Cart</button>:

            <button className='ms-3 btn btn-success' onClick={addToCart}>Add to Cart</button>

            
          }
      </>):(
      <button className='btn btn-outline-danger'>Out of Stock</button>

      )}
      </div>
      </div>
    
  </div>
  </div>
  
  )
}
