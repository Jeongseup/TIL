def recursive_function(i: int):
	# 베이스 케이스
	if i == 100:
		return

	print(f'{i}번째 재귀함수에서 {i + 1}번째 재귀함수를 호출합니다.')
	# recursive
	recursive_function(i + 1)
	print(f'{i} 번째 재귀함수 종료')


def factorial_recursive(n: int) -> int:
	# base case
	if n == 1:
		return 1

	# recursive part
	# 팩토리얼은 현재의 나와 이전의 값을 곱하는 것
	return n * factorial_recursive(n - 1)


# recursive_function(1)
print(factorial_recursive(5))