# 올해 경과된 날짜 수 계산하기.


# 조건
# 1. 날짜는 현재해 1월 1일부터 카운트 합니다.
# 2. 화면에 print를 이용하여 다음과 같이 출력합니다.
# “오늘은 [2019-01-01]이후 [365]일째 되는 날입니다.”
# 3. time 모듈의 localtime()을 임포트합니다.

import time

t = time.localtime()
print(t)
ty = t.tm_year
tm = t.tm_mon
td = t.tm_mday
days = t.tm_yday
print("오늘은 [{:04}-{:02}-{:02}]이후 [{}]일째 되는 날입니다.".format(ty, tm, td, days))
