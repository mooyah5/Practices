'use client'
import { useState } from 'react'

export default function List() {

  const products = [
    {name: '토마토', price: 40},
    {name: '파스타', price: 60},
    {name: '코코넛', price: 80},
    {name: '코코넛오일', price: 20}
  ]
// let count = 0
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        products.map((product, i) => {
          return (
            <Product key={i} name={product.name} price={product.price} />
          )
        })
      }
    </div>
  )
}

export function Product(props) {
  let [count, setCount] = useState(0);
  return (
    <div className="food" key="i">
      <img className="product-img" src={`${props.name}.png`}></img>
      <h4>{props.name} ${props.price}</h4>
      <button onClick={() => { setCount(count-1) }}>-</button>
      <span> {count}개 </span> 
      <button onClick={() => { setCount(count+1) }}>+</button>
    </div>
  )
}