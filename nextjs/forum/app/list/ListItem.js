
'use client'

import Link from "next/link"

export default async function ListItem({ res }) {
  return (
    <div className="list-bg">
      { res.map((contents, i) =>
        <div className="list-item" key={i} href="/detail">
          <h4>
            <Link prefetch={false} href={'/detail/' + res[i]._id}> {res[i].title}</Link>
            <Link href={'/edit/' + res[i]._id}>✍🏼</Link>
            <button className="list-btn" onClick={(e) => {
              fetch('/api/post/delete', { method: 'POST', body: result[i]._id })
                .then((r) => r.json())
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display = 'none';
                  }, 1000)
              })
            }}>🗑️</button> 
          </h4>
          <p>{res[i].content}</p>
        </div>
      ) 
      }
    </div>
  )
} 