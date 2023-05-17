# 실행 컨텍스트

## 실행컨텍스트란

자바스크립트 코드가 실행되는 환경!
실행할 코드에 제공할 환경 정보들을 모아놓은 객체!
모든 JS코드가 실행되는 공간!
JS코드가 실행되고 연산되는 범위를 나타내는 추상적 개념!
코드들이 실행되기 위한 환경이자, 하나의 박스이자, 컨테이너!

JS의 동적언어로서의 성격을 가장 잘 파악할 수 있다.

---

JS는 실행컨텍스트 활성화 시점에 다음의 현상이 발생한다.

- 호이스팅 (선언된 변수를 위로 끌올)
- 외부 환경정보 구성
- this 값 설정
  이로 인해, 다른 언어에서 발견하지 못하는 특이 현상들이 발생한다.

---

`1. 소스코드 평가 => 2. 실행컨텍스트 <=> 실행`
처음에 소스코드를 평가하는데,
그것에 따라 실행컨텍스트가 생성되고
그러고나서 평가된 코드를 실행하면서 실행 컨텍스트에 계속 반영이 된다.

---

### JS 코드 실행에 필요한 정보

- 변수: 전역, 지역, 매개변수, 객체의 프로필
- 함수 선언
- 변수 유효범위
- this

함수가 실행되면 함수 실행에 해당하는 `실행 컨텍스트`가 생성된다.
그리고 JS엔진에 있는 call stack에 쌓인다.

가장 위에 쌓인 컨텍스트와 관련된 코드를 실행하며(LIFO)
전체 코드의 환경, 순서를 보장한다.

식별자(변수, 함수, 클래스 등의 이름)을 등록, 관리하는 스코프와 코드 실행순서 관리를 구현한 내부 매커니즘이다.
곧, JS의 핵심 원리에 해당한다.

## 종류

- 전역 실행 컨텍스트 (Global Execution Context)

  - 기본 실행 컨텍스트로, 함수 내부에 없는 코드는 전역에서 실행된다고 생각하쇼
  - 프로그램에 오직 하나만 존재하며, 두 가지 작업을 수행한다.
    1. window 전역 컨텍스트 생성
    2. this를 전역 객체(Global Object)로 생성
  - 브라우저 = window 객체
  - node.js = global 객체

- 함수 실행 컨텍스트 (Functional Execution Context)

  - 함수 실행 때마다 만들어짐
  - 각 함수는 고유의 실행 컨텍스트를 가짐
  - 함수 실행 혹은 call 될 때만 생성됨

- eval() 실행 컨텍스트

## 언제 만들어짐?

JS 엔진이 스크립트를 처음에 마주할 때
전역 컨텍스트를 생성하고, 콜스택에 push한다.

엔진이 스크립트를 읽어내려가면서,
함수를 발견할 때마다 함수의 실행컨텍스트를 스택에 push한다.
(함수 실행 컨텍스트는 함수가 실행될 때 만들어진다! - not 선언할 때)

### 함수 컨텍스트 만드는 방법

실행컨텍스트는 다음의 것들을 이용하면 call stack에 쌓인다.

- 전역공간 (자동 구성)
- 함수 (를 실행)
- eval() (eval is evil.. 속도, 보안성땜시 거의 사용하지 않음)
- block을 생성 (ES6+)

일반적으로는 함수를 이용한 실행컨텍스트를 생성한다..

### Execution Stack

다른 프로그래밍 언어에서는 호출 스택(call stack)이라 불리는 것과 동일한 의미
스택은 LIFO(후입선출) 형태다.

JS엔진이 어떻게 실행컨텍스트를 관리하고 동작할까?

JS엔진은 `script` 요소를 처음 만나면 `전역 실행 컨텍스트`를 생성하고 `Execution Stack`에 push한다.
그리고 엔진이 함수 호출을 찾을 때마다 해당 함수에 대한 새로운 실행 컨텍스트를 생성하여 `Execution Stack`의 맨 위로 푸시한다.

JS엔진은 실행컨텍스트가 스택의 맨 위에 있는 함수를 실행한 뒤 함수가 종료되면 스택에서 제거한 뒤, 호출 스택은 최신화된 스택에서 맨 위 컨텍스트를 이전과 동일한 방식으로 접근한다.
(쉽게 말해... 전역변수에서 함수 만나면 스택에 추가하면서 함수들어가고, 함수 내에서 함수 만나면 또 스택 위에 추가하면서 함수 드가고, 함수끝나면 스택에서 빼고, 빼고 반복)

```javascript
var a = 1; // 전역
function outer() {
  // outer
  function inner() {
    // inner
    console.log(a); // undefinde
    var a = 3;
    console.log(a); // 3
  }
  inner();
  console.log(a); // 1
}
outer();
console.log(a); // 1
```

위와 같이 코드를 구성하면, 스택은 다음과 같은 순서로 실행된다.

- 프로그램 실행: `[전역 컨텍스트]`
- outer 실행: `[전역컨텍스트, outer]`
- inner 실행: `[전역컨텍스트, outer, inner]`
- inner 종료: `[전역컨텍스트, outer]`
- outer 종료: `[전역컨텍스트]`

그리고 이런 실행컨텍스트를 구성할 때 생기는 것들이 있다.

...

---

```javascript
var a = function() {...}
```

라는 구문은

```javascript
var a;                  // 선언
a = function() {...}    // 할당
```

으로 나누어 동작한다.
EnvironmentRecord의 변수 수집은 선언*만* 한다.
함수선언문은 전체가 하나의 *선언*이므로 처음부터 수집되는 예외 케이스이고,
함수표현식은 일반적인 변수 선언/할당과 동일하게 이해하면 된다.

## Execution Context 생성 로직

JS엔진이 실행컨텍스트를 만드는 과정

- Create Phase
  - 생성단계에서 생성되면서, 두가지 일 발생
    - Lexical Environment 구성요소 생성
      - JS 코드에서 변수, 함수 등 식별자를 정의하는데 사용하는 객체
      - 식별자와 참조 혹은 값을 기록하는 Environment Record와 outer라는 또다른 렉시컬환경을 참조하는 포인터로 구성
    - Variable Environment 구성요소 생성 (환경변수)
- Execution Phase

## 구조

`LexicalEnvironment(LE)`컴포넌트와 `variableEnvironment(VE)`컴포넌트로 구성

- inner
  - variable environment(VE)
    - environment record (snapshot)
      - 현재 실행 컨텍스트 내에서 호이스팅되는 애들 저장
    - outer environment reference (snapshot)
      - outer environment
  - lexical environment (LE)
    - environment record
      - 변수선언 및 함수선언문 저장
    - outer environment reference
      - Variable environment
  - this binding
- outer
- global context

![execution_context_1](".\execution_context_1.png")
( ES6부터는 ThisBinding도 Env.Rec. 내에 포함됨 )

```javascript
var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z); // 20,
  }
  bar(10);
}
foo(20); // 42
```

위 코드에서 BindingObject에 들어가는 것은 x, foo()
Decalrative Env.Rec. 에는 y가 들어온다.
y는 아직 초기화되지 않아(uninitialized),
temporal dead zone에 빠지게 된다.

함수가 호출되면, 전역 공간에 있던 코드 제어권이 함수 내부로 이동하면서 함수코드 평가 시작

- 함수코드 평가 순서

  - 함수 실행 컨텍스트 생성
  - 함수 LexicalEnvironment 생성
    - environmentRecord 생성
    - ThisBinding
    - outerEnvironmentRefernce 결정

- variableEnvironment
  - 현재 컨텍스트 내의 `식별자들에 대한 정보와 외부 환경정보`를 담음
  - 선언 시점의 LexicalEnvironment의 스냅샷으로 변경사항은 미반영
  - 실행컨텍스트 생성 시 variableEnvironment에 정보를 먼저 담고, 이를 복사해서 LexicalEnvironment를 만든다.

---

### 출처

https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/#_2-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC-%E1%84%8F%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3-%E1%84%80%E1%85%AE%E1%84%89%E1%85%A5%E1%86%BC

https://catsbi.oopy.io/fffa6930-ca30-4f7e-88b6-28011fde5867

https://www.youtube.com/watch?v=EWfujNzSUmw
