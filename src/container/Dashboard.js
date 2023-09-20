import React from 'react'
import { ProductList } from '../Data/ProductList'
import ProductCart from '../component/ProductCart'

export default function Dashboard() {
  return (
    <div>
        {ProductList.map((product) => <ProductCart {...product} />
        )}
    </div>
  )
}
