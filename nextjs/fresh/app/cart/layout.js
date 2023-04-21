import Link from "next/link"
export default function Layout({ children }) {
  return (
    <div>
      <Banner content="현대카드"/>
      {children}
    </div>
  )
}

export function Banner(props){
  return (
    <Link href="/event"><p className="event">{ props.content} 무이자 이벤트 중</p></Link>
  )
}

// export function Banner((props) => {
//   return (
//     <Link href="/event"><p className="title">{ props.content} 무이자이벤트중</p></Link>
//   )
// })