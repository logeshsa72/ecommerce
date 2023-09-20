import React from 'react'


export default function ProductCart(props) {
  return (
  <div className='card m-2'>
    <div>
        <img src={props.thumbnail} height={150} width={180} alt={props.tittle} className='' />
    </div>
    
  </div>
    )
}
