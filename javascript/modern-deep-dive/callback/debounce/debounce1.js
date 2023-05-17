//// https://www.freecodecamp.org/korean/news/debounce-dibaunseu-javascripteseo-hamsureul-jiyeonsikineun-bangbeob-js-es6-yeje/

//// Debounce
// JS에서 함수를 지연시키는 방법
// 유저가 입력할 때마다 코드를 오직 한 번씩만 실행되도록 해주는 함수
// 사용사례) 검색박스 제안, 텍스트필드 자동저장, 버튼 더블클릭 제거

// 전자공학에서 유래된 용어로,
// 리모컨 버튼을 누르면, 떼기도 전에 신호가 빠르게 마이크로칩으로 흐른다.
// 그리고 이 신호는 디바운스되어 마이크로칩은 여러번 클릭한 것을 등록해버린다.

// 위 과정을 줄이기 위해 일단 버튼 신호를 받으면,
// 마이크로칩은 물리적으로 다시 버튼을 누르는게 불가능한
// 몇 마이크로 초 동안 버튼 신호를 처리하지 않는다.

/// JS도 마찬가지다.


//// * 제안옵션, 자동저장 활용
// 제안옵션: 방문자가 타이핑을 끝낸 뒤에만! 검색 쿼리에 대한 제안 옵션을 주고 싶다면?
// 자동저장: 양식 내용을 저장하고 싶은데, 매번 저장이 발생하면 DB를 거치니, 사용자가 적극 변경하지 않을 때만 하고 싶다면?

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

