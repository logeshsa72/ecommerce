import React from 'react'

export default function ProductListItem(props) {
  return (
    <div className='d-flex m-4 align-items-center justify-content-center'>
    <img src={props.images} height={200} width={200} alt={props.tittle} className='border-radius-9' />

      <h5 className='card-tittle me-4'>{props.tittle}</h5>
      <h6 className='mt-2 me-4'>Price: {`${props.Price}`}</h6>
      <h6 className='mt-2 me-4'>{props.category}</h6>
      <div className='mt-4 me-4'>
      <button className='btn btn-success ms-3' onClick={props.incrementItem}>+</button>
      <sapn className='ms-3'>Quantity  -  {props.count}</sapn> 
      <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
      <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>

      </div> 
      </div>


  )
}
