"""
영문 소문자(a ~ z) 1개가 입력되었을 때,
a부터 그 문자까지의 알파벳을 순서대로 출력해보자.

예시
c = ord(input())
t = ord('a')
while t<=c :
  print(chr(t), end=' ')
  t += 1
"""
input_chr = ord('f')
base_chr = ord('a')

# 80 - 64
while (input_chr - base_chr) >= 0:
	print(chr(input_chr))
	input_chr -= 1

