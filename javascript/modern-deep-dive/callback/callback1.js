// 콜백함수란
/// 함수에 파라미터로 들어가는 함수

// 콜백함수 용도
/// 순차적으로 실행하고 싶을 때 사용

// 이벤트 리스너 배울 때 가장 먼저 볼 수 있음
// document.querySelector('.button').addEventListener('click', function () { })
/// 위에서 addEventListner가 함수인데,
/// 그 안의 function이 콜백함수임
/// 버튼 클릭하면 function 내 코드가 실행될 것임

setTimeout(() => {
    // 내부
    console.log(3)
}, 1000)
/// 1초 경과 후에 내부 실행 실행


// 특징
/// 다른데서 만든 함수도 콜백함수로 넣을 수 있다.
/// 함수명 작명도 가능하다.
/// 콜백함수가 필요한 함수들에만 콜백함수 사용 가능 (대표적으로 addenvet..., setTimeout...)

// 함수 안에 함수 넣어보기
function first(파라미터) {
    setTimeout(() => {
        console.log(1)
    }, 2000);
    파라미터()
}

function second() {
    console.log(2)
}

first(second)
/// fisrt 함수 안의 코드 실행해주세요.
/// 근데 파라미터에 second 집어넣어서요

// 아래처럼 해도 됨
// first()
// console.log(2)

// 하지만 굳이 콜백함수 하는 이유?
// 협업 시, 내가 first 함수 만들었는데 팀원들이 자주 씀
// first() 후에 console.log(2) 바로 실행하고 싶은 팀원과 console.log(4) 하고 싶은 팀원이 있다면,
// 가끔가다 first()가 비동기 처리되면 뜻대로 안될 수도 있음

// 따라서 아래와 같이 콜백함수로 만들면 안정적으로 순차처리 가능
function first_2(파라미터) {
    console.log('a')
    파라미터()      // first_2 함수 실행 후 안전하게 무조건 그 다음 실행할 수 있게 됨
}

function second_2() {
    console.log('b')
}

first_2(second_2)


// 사용예시 1

/// DB에서 데이터 뽑고 싶은데
/// A뽑고, B뽑고, C 뽑는 순서를 지키고 싶다.

//// 1) 콜백지옥의 예
// db.collection('post').findOne(A, function () {
//     db.collection('post').findOne(B, function () {
//         db.collection('post').findOne(C, function () {
//         })
//     })
// })

//// 2) Promise
// first.then()

//// 3) async, await


// ---https://www.youtube.com/watch?v=nKD1atl6cAw