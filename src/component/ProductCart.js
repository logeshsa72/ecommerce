import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function ProductCart(props) {
const navigate = useNavigate();

  return (
  <div className='card m-2' style={{width:300}} role='button' onClick={()=>navigate(`/Product/${props.id}`)}>
    <div className='mt-2 text-center'>
    <img src={props.images} height={200} width={200} alt={props.tittle} className='border-radius-9' />

    </div>
    <div className='cart-body text-center'>
      <h5 className='cart-tittle'>{props.tittle}</h5>
      <h6 className='mt-2'>Price: {`${props.Price}`}</h6>
      <h6 className='mt-2'>{props.category}</h6>
      <div className='mt-4 mb-4'>
      {props.stock >0 ?<button className='btn btn-success'>Available</button>:<button className='btn btn-outline-danger'>Out of Stock</button>}
      </div>
    </div>
  </div>
    )
}
