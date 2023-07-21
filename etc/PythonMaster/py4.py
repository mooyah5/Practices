# URL에서 쿼리 문자열 추출하기


# 조건
# 1. 웹 사이트 주소는 “https://post.naver.com/viewer/postView.nhn?volumeNo=27174949&memberNo=37451778&navigationType=push” 로 한다.
# 2. 결과는 다음과 같이 한다.
# volumeNo=27174949
# memberNo=37451778
# navigationType=push

web = "https://post.naver.com/viewer/postView.nhn?volumeNo=27174949&memberNo=37451778&navigationType=push"
i = 0
state = ""
stack1 = ""
stack2 = ""
dict_ = dict()
while i < len(web):
    if web[i] == "?" or web[i] == "&":
        state = "key"

        stack = ""
    elif web[i] == "=":
        dict_[stack1] = ""
        state = "value"

        dict_

    i += 1
