<?php
  echo "hi"

  $a[0]="abc";
  $a[1]="def";
  $b['foo']=13;


  foreach($array as $value);          // value만 가져옴
foreach($array as $key => $value)   // key, value를 가져옴

$employee_list = array(
  'Programmer' => 'Ella',
  'Designer' => 'Jehn'
);

foreach($employee_list as $row)
{
  echo $row."<br/>";
}

foreach($employee_list as $key => $value)
{
  echo $key.": " .$value."<br/>";
}


class Human {
  var $Name;
  var $Age;
  var $Height;
  
  function Eat () {...}
  function Walk () {...}
  function Talk ($words) {...}
}

$hanna = new Human;         // 한나라는 객체 만들기
$hanna->Eat();              // 한나 밥먹이기
$hanna->Talk($hanna->Age);  // 한나한테 몇 살인지 말 해보라고 시키기

class Baby Extends Human {
  function EatMilk () {...}
  function TalkWithAngel () {...}
}

$duna = new baby;        // 아기 클래스로 두나 객체 생성
$duna->TalkWithAngel();  // 응애예요

$a = array("a" => "사과", "b" => "바나나");
$b = array("a" => "배" , "b" => "딸기", "c" => "포도");

$c = $a + $b;    // array("a" => "사과", "b" => "바나나" , "c" => "포도")

@include "a.php"


// require()

// 수행 실패 시 Warning만 출력하고 나머지 코드를 모두 수행
// 같은 파일을 여러 번 require 하더라도 딱 한 번만 수행

// include()

// 수행 실패 시 Fatal Error 를 내고 프로그램이 그 자리에서 종료됨
// 같은 파일을 여러 번 include 하는 것도 가능

function ezphp_net ($url = 'http://...')   // 기본값
{
  return "홈페이지 주소 : $url<BR>";
}

echo ezphp_net();
echo ezphp_net('http://dd...');