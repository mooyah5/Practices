//// 호출 스케줄링
// 자바스킙트는 타이머를 생성할 수 있는 타이머 함수
// setTimeout(), setInterval(), clearTimeout(), clearInterval()을 제공
// 빌트인 함수 아님, web browser와 node.js 호스트 객체에서 제공

// 자스 엔진은 싱글스레드로 동작한다.
// 그러므로 setTimeout, setInterval은 비동기 처리 방식으로 동작함.

// setTimeout((콜백함수) => {실행}, 지연될 시간(ms))
// setTimeout이 타이머ID 값을 자동 부여해서, 반환값을 내놓음

//// 1. 콜백함수, 인수 생략
// 콜백함수를 넘길 때, 함수의 인수를 받게 되어있는데,
// 그 인수가 세번째 인자로 넘겨질 수 있다.
const timeoutId1 = setTimeout(name => console.log('1. 안녕', name), 10, '한나야')

// 그리고 두번째 인자까지 생략 가능한데, 0으로 인식되고, 실제로는 4ms 뒤에 작동.



//// 2. clearTimeout : setTimeout을 취소시킨다.
const timeoutId2 = setTimeout(() => console.log('2. 늦게 한 취소는 하나 마나다...'), 1000)
setTimeout(() => clearTimeout(timeoutId2), 3000) // 1초보다 일찍 실행하면 2는 취소됨



//// 3. setInterval
// 주기적으로 한번씩 실행해라.

let count = 1
// 1초(1000ms) 후 타이머가 완료될 때마다 콜백함수가 호출된다.
// setInterval() 함수는 생성된 타이머를 사용할 수 있는
/// 고유한 타이머 id를 반환한다.

const timeoutId3 = setInterval(() => {
    console.log(count) // 1 2 3 4 5
    // count가 5이면 setInterval 함수가 반환한 타이머 id를
    // clearInterval 함수의 인수로 전달하여 타이머를 취소한다.
    // 타이머가 취소되면 setInterval 함수의 콜백함수가 실행되지 않는다.
    if (count++ == 5) {
        clearInterval(timeoutId3)
        // timeoutId3 = null // 필요한 작업 아님!! 에러유발..
    }
}, 500)