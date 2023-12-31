import React from 'react'
import Product from './Product'
import { PRODUCT } from '../../product'
import './Order.css'

export default function Order() {
  return (
    <div className='Shop'>
        <div className="shop-title">
            <h1>ORDER MENU</h1>
        </div>
        <div className="shop-products">
            {PRODUCT.map((value,i) => (
                <Product data={value} key={i}/>
            ))}
        </div>
    </div>
  )
}
