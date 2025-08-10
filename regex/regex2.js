// match vs matchAll
// match: 첫 매치만 자세히, g면 문자열 목록
// matchAll: 모든 매치를 그룹/인덱스까지 주는 이터레이터

// 첫번째만 필요할 때 => str.match(re) (g 없이)
// 전부 + 그룹도 필요 => str.matchAll(re) (g 필수)
// 전부 필요 but no 그룹 (텍스트만 모으기/갯수 세기) => str.match(reWithG)
const s = "2025-08-10, 1999-01-02";
const re1 = /(\d{4})-(\d{2})-(\d{2})/;   // g 없음
const reG = /(\d{4})-(\d{2})-(\d{2})/g; // g 있음

// ---- 1) match (g 없음) ----
console.log("// ---- 1) match (g 없음) 첫 매치 자세히 ---- ")
const m = s.match(re1)
console.log(m)
console.log(m[0])
console.log(m[1])
console.log(m[2])
console.log(m.index)
console.log(m.input)

// ---- 2) match (g 있음) ----
console.log("// ---- 2) match (g 있음) 문자열 목록만 ---- ")
const arr = s.match(reG)
console.log(arr)

// ---- 3) matchAll (g 필수) -- 모두 + 그룹 인덱스 ----
console.log("// ---- 3) matchAll (g 필수) -- 모두 + 그룹 인덱스 ---- ")
const it = s.matchAll(reG)
const all = [...it] // == Array.from(it)
console.log(all)

// ---- 4) matchAll (g 필수) -- 모두 + 그룹 리네임 ----
console.log("// ---- 4) matchAll (g 필수) -- 모두 + 그룹 리네임 ----")
const reNamed = /(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/g;
console.log('renamed: ', [...s.matchAll(reNamed)])


// ---- 5) replace all ----
const newS = "생일 2025-08-10, 출시 1999-01-02, 회의 2024-12-31";
console.log("// ---- 5) replace all ---- ")
const out = newS.replace(reNamed, "$<d>/$<m>/$<y>")
console.log(out)
