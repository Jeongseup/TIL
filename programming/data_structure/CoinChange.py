import sys
from typing import List


def coinChange(coins: List[int], value: int) -> int:
	# recursion
	def change(v: int):
		# 베이스 조건
		if v == 0:
			return 0

		min_coin_cnt = sys.maxsize
		for temp_coin in coins:
			# 교환 가능하면
			if (v - temp_coin) >= 0:
				change_cnt = change(v - temp_coin)
				# 최소 cnt 구분
				if change_cnt < min_coin_cnt:
					min_coin_cnt = change_cnt

		# 0 이 되면 끝에 다 다른 것이고 cnt를 1 증가해서 return
		return min_coin_cnt + 1

	ans = change(value)
	return ans if ans != sys.maxsize + 1 else -1


print(coinChange([1,2,5], 11))