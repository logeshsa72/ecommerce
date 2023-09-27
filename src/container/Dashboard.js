import React from 'react'
import { ProductList } from '../Data/ProductList'
import ProductCart from '../component/ProductCart'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {ProductList.map((product) => <ProductCart {...product} key= {product.id}/>
        )}
    </div>
   
   )
}
