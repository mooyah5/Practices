
import Link from "next/link"
import { CartItem } from '../cart/page.js'

export default function Test() {
  const cartItems = [
    { name: '코코넛오일', price: 20, count: 1 },
    { name: '청양고추', price: 60, count: 8 },
    { name: '토마토', price: 40, count: 2 },
  ]
  return (
    <div>
      <h2 className="title">장바구니 test</h2>
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