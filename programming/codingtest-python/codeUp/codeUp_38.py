"""
본 문제는 python 의 빠른 기초 학습을 위해 설계된 문제로서 python 코드 제출을 기준으로 설명되어 있습니다.
------

정수 2개(a, b)를 입력받아
a를 b번 곱한 거듭제곱을 출력하는 프로그램을 작성해보자.

예시
...
c = int(a)**int(b)
print(c)
"""

a, b = map(int, input().split())

print(a ** b)
print(pow(a, b))
