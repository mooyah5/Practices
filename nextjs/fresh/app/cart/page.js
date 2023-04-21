'use client'
import Link from "next/link"

export default function Cart() {
  const cartItems = [
    { name: '토마토', price: 40, count: 2 },
    { name: '코코넛오일', price: 20, count: 1 },
    { name: '청양고추', price: 60, count: 8 },
  ]
  return (
    <div>
      <h2 className="title">장바구니</h2>
      <Link href="/cart/payment"><p className="title-sub">결제</p></Link>
      {
        cartItems.map((item, i) => {
          return (
            <CartItem name={item.name} price={item.price} count={item.count} />
          )
        })
      }
    </div>
  )
}

export function CartItem(props) {
  return (
    <div className="food cart-item">
      <img className="product-img" src={`${props.name}.png`}></img>
      <h4>{props.name} ${props.price} {props.count}개</h4>
    </div>
  )
}