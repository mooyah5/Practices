'use client'

import { useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {
  let router = useRouter()
  // 현재 url
  // let path = usePathname()
  // 쿼리스트링
  // let searchParams = useSearchParams()
  // [다이나믹 route] 에 입력한 내용 출력 (url 파라미터)
  return (
    <div>
      <button onClick={() => {router.push('/') }}>main</button>
      <button onClick={() => { router.back() }}>back</button>
      {/* refresh 변동사항만 바꿔주는 soft 새로고침 */}
      <button onClick={() => {router.refresh() }}>prefetch</button>
      {/* prefetch 해당 페이지에 필요한 로딩을 미리 해줌 */}
      {/* <button onClick={() => {router.prefetch('/detail/asdf') }}>미리패치</button> */}
    </div>
  )
}