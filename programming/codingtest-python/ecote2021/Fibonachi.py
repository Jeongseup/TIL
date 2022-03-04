from typing import List

def fib(n):
	if n == 0 or n ==1:
		return n
	else:
		res = fib(n -1) + fib(n - 2)
		print(res)
		return res

def fibonachi(n: int, memo: List[int]) -> int:
	# update
	if memo[n] == -1:
		memo[n] = fibonachi(n - 1, memo) + fibonachi(n - 2, memo)

	return memo[n]

n = 4
memo = [-1]  * (n + 1)
memo[0], memo[1] = 0, 1

print(fibonachi(n, memo))