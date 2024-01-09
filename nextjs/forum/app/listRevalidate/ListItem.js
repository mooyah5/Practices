"use client";

import Link from "next/link";

export default async function ListItem({ res }) {
  // useEffect(() => {
  //   // 서버에 부탁해서 DB 게시물 가져오기 res = from db
  //   // BUT 단점: use client를 명시한 client side component에서는 html 전부 렌더링 된 다음에 useEffect가 실행되므로 텅 빈 상태로, SEO에 불리함.
  // }, []);
  return (
    <div className="list-bg">
      {res.map((contents, i) => (
        <div className="list-item" key={i} href="/detail">
          <h4>
            <Link prefetch={false} href={"/detail/" + res[i]._id}>
              {" "}
              {res[i].title}
            </Link>
          </h4>
          <Link href={"/edit/" + res[i]._id}>✍🏼</Link>
          <button
            className="list-btn"
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "POST",
                body: res[i]._id,
              })
                .then((res) => res.json())
                .then((r) => console.log(r))
                .then(() => {
                  console.log(e.target.parentElement);
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 500);
                });
            }}
          >
            🗑️
          </button>
          <p>{res[i].content}</p>
        </div>
      ))}
    </div>
  );
}
