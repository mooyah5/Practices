import Link from "next/link"

export default function Home() {
  let name = 'Baek'

  return (
    <div>
      <h4 className="title" style={{ color: 'lime', fontSize: '20px'}}>Hanna Fresh</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}
