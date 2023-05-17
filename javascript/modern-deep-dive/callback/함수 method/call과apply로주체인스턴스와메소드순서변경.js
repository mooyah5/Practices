// / 2. call, apply로 주체가 되는 인스턴스와 메소드의 순서 바꾸기!!!

// / 기존 filter 사용법
// array.filter(function())의 경우,
// filter 메소드는 함수를 argument(인자)로 받고,
// 이를 앞에 있는 인스턴스인 array에 적용한다.
// 이 부분을 call과 apply의 arguments에 대입해보면,
// 첫 인자인 thisArg 자리에는 array, 두번째 인자 arg 자리에는 함수가 드간다.

function moreThanFive(element) {
    return element.length > 5;
}
let arr2 = ['abc', 'defghi']
arr2.filter(moreThanFive)       // ['defghi'] => 인스턴스(arr)가 먼저 나오고, 그 뒤에 메소드(filter)가 등장

Array.prototype.filter.call(arr, moreThanFive)  // ['defghi'] => 메소드(filter)가 먼저 나오고, 인스턴스(arr)가 뒤에 나옴]
Array.prototype.filter.apply(arr, [moreThanFive])  // ['defghi'] => 위의 call과 동일