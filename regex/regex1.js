const s = '하나 "abc" 둘 "def"💡 \n 셋'

let unitIdx = 0; // UTF-16 코드유닛 인덱스(너가 지금 본 그 16,17 방식)
let cpIdx = 0;   // 코드포인트 인덱스(사람이 느끼는 '문자' 수)
for (const ch of s) {
  console.log({ unitIdx, cpIdx, char: JSON.stringify(ch), length: ch.length });
  unitIdx += ch.length; // 이모지는 ch.length가 2라서 두 칸 전진
  cpIdx += 1;
}
