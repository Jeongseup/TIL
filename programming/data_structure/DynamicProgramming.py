from typing import List


def fib(n):
	if n == 0 or n == 1:
		return n
	else:
		return fib(n - 1) + fib(n - 2)

def fib2(n: int, memo: List[int]) -> int:
	if memo[n] == -1:
		memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo)

	return memo[n]

n = 4
memo = [-1] * (n + 1)
memo[0], memo[1] = 0, 1

print(fib2(n, memo))
