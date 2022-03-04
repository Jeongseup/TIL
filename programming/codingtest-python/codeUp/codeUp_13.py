"""
본 문제는 python 의 빠른 기초 학습을 위해 설계된 문제로서 python 코드 제출을 기준으로 설명되어 있습니다.
------

줄을 바꿔 문자(character) 2개를 입력받고, 순서를 바꿔 한 줄씩 출력해보자.
"""


input_first = "a"
input_second = "b"
# 스택을 만들고
stack = []

# 들어온 input 하나씩 appending
stack.append(input_first)
stack.append(input_second)


# 그리고 len 만큼 pop()해서 출력

while stack:
	# print(stack)
	print(stack.pop())

""" expected result
b
a
"""
