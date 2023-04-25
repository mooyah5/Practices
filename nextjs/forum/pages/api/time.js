export default async function handler(요청, 응답) {
  if (요청.method == "GET") {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    let date = today.getDate()
    let day = today.getDay() // 요일
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    return 응답.status(200).json(year+'.'+month+'.'+date+'   '+hours+':'+minutes+':'+seconds)
  }
  
}