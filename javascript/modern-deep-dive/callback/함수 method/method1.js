//// https://velog.io/@devmin/TIL-%ED%95%A8%EC%88%98-%EB%A9%94%EC%86%8C%EB%93%9C-5ok29tthyz
//// https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd

//// JS 함수 메소드 (apply, call, bind)

//// apply
// fn.apply(thisArg. [argsArray])
// this 인자를 첫 인자로 받고, 두번째는 배열을 받음

//// call
// fn.call(thisArg[, arg1[, arg2[, ...]]])
// this 인자를 첫 인자로 받고, 두번째부터는 배열 아닌 각 인자로 받음

//// bind
// fn.bind(thisArg[, arg1[, arg2[, ...]]])
// call 과 작성법은 같지만
// apply, call과 다르게 바로 메소드가 실행되지 않음
// thisArg를 바인딩하는 역할만 함.

///////////////////////////////////////////////
// 원래 함수는 선언 후 호출해야 실행된다.
// 호출방법은 함수 뒤에 ()를 붙이기, call, apply가 있다.

var asdf = function (a, b, c) {
    return a+b+c
}
asdf(1, 2, 3)
asdf.call(null, 1, 2, 3)
asdf.apply(null, [1, 3, 3])
// call은 보통 함수랑 똑같이 인자를 넣고,
// apply는 인자를 하나로묶어 배열로 만들어 넣는다.
// 위에서 null 인자가 하는 일은??? 바로 this를 대체하는 것이다.
var obj = {
    strr: 'zero',
    yell: function () {
        alert(this.strr)
    }
}
var obj2 = {
    strr: 'what?'
}
obj.yell()          // zero
obj.yell.call(obj2) // what?

// 위의 마지막 줄처럼 다른 객체의 함수를 자기 것마냥 사용할 수 있다.

// this는 기본적으로 window이지만, 몇가지 방법으로 다르게 바꿀 수 있는데,
// call, apply, bind에서 첫 인자로 다른 것을 넣어주는 것도 this를 바꾸는 방법 중 하나이다.


///////////////////////////////////////////////////


/// apply
// Math.max() 메소드 사용하면, arguments로 받은 숫자값들 중 가장 큰 값을 뽑아주지만,
// 해당 arguments가 배열이면, 바로 값을 뽑을 수 없다. (Math.max() arguments는 숫자만 들어감)
// 이때 apply를 쓰면 해결 가능
Math.max(12, 4, 5, 6, 1, 20, 4, 8) // 20
let arr = [12, 4, 5, 6, 1, 20, 4, 8]
Math.max(arr) // NaN
Math.max.apply(null, arr) // 20
// apply에서 두번째 인자로 배열을 받고
// 그 배열을 각각 인자로 배정해서 계산을 가능케 해준다.
// MAth.max() 메소드는 this 역할이 없어서 첫 인자에 들어가는 값이 중요하지는 않다.

/////////////////////////////////////////////


//// bind
// 함수가 가리키는 this만 바꾸고, 호출은 하지 않는다.
// call, apply랑 비슷한데 호출은 하지 않고, 함수만 반환한다.
var obj = {
    string: 'zero',
    yell: function() {
        alert(this.string);
    }
};
var obj2 = {
    string: 'what?'
};
var yell2 = obj.yell.bind(obj2);    // yell 함수의 this가 obj2로 바뀌기만 함. (호출은 안함, 함수만 반환)
yell2(); // 'what?'

////////////////////////////////////////////////////
