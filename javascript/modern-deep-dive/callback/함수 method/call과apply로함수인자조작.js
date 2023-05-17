

//// 1. call, apply로  함수의 arguments(인자) 조작하기!!
// arguments는 함수가 처음부터 갖는 숨겨진 속성으로,
// 함수에 들어온 인자를 배열형식(배열은 아니고,, 유사배열)으로 반환한다.
function qwer() {
    console.log(arguments)
}
qwer(1, 'string', true) // [1, 'string', true]
// 생긴건 배열인데, 유사배열이라, 배열의 메소드는 쓸 수가 없다.
function qwer2() {
    console.log(arguments.join())
}
qwer2(1, 'string', true)    // Uncaut TypeError: arguments.join is not a functino
// 이러 때, call, apply를 사용하면 된다.
function qwer3() {
    console.log(Array.prototype.join.call(arguments))
}
qwer3(1, 'string', true)    // '1,string,true'
// 이렇게 배열의 프로토타입에 있는 join 함수를 빌려쓸 수 있게 되었다.
// this는 arguments를 가리킨다.
// join 외에 slice, concat 등 모든 메소드를 이렇게 쓰면 된다잉