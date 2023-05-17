// 자동저장 예시

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}
function saveInput() {
    console.log('saving data')
}
const processChange = debounce(() => saveInput())

// 입력창: <input type='text' onkeyup='processChange()'/>
// 버튼: <button onclick='processChange()'>CLICK ME</button>
// Window Event: window.addEventListner('scroll', processChange)

// 위와 같은 코드를 실행시키면 어떻게 될까?
// debounce함수는 timer 값의 scope를 할당하고, 
// 함수가 지정된 시간에 작동되도록 스케줄링 한다.

// 방문자가 첫 글자를 입력하고 키에서 손을 뗀다.
// debounce는 우선, clearTimeout(timer)로, timer를 재설정한다.
// 이후 주어진 함수이 ㄴsaveInput()을 300ms 마다 실행되도록 스케줄링한다.

// 근데 만일 방문자가 작성 중 키에서 손을 뗄 때마다 debounce가 한번더 실행된다면
// 매전 timer를 재설정한다.
// 그 말은, saveInput()과 함께 직전 예정한 것을 취소하고, 다음의 300ms 라는 새 시간으로 다시 스케줄 한다는 것
// 방문자가 300ms 이내 계속 키를 입력하는 한 지속된다.

// 마지막 스케줄은 제거되지 않으므로, 마침내 saveInput()이 호출된다.

