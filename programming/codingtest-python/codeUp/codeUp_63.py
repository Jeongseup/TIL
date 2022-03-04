"""
예시
a, b = input().split()
a = int(a)  #변수 a에 저장되어있는 값을 정수로 바꾸어 다시 변수 a에 저장
b = int(b)
c = (a if (a>=b) else b)
print(int(c))
"""

a, b = 123, 456

c = a if (a > b) else b
print(c)
