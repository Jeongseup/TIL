"""
실수 1개를 입력받아
소숫점 이하 두 번째 자리까지의 정확도로 반올림한 값을 출력해보자.


예시

a=float(input())
print( format(a, ".2f") )
"""

# 3.141592
test = "13.141592"
print(f'{float(test):.2f}')