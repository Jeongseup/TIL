from typing import List


def coin_change(coins: List[int], amount: int) -> int:
	dp = [float('inf') for _ in range(amount + 1)]
	print(dp)

	dp[0] = 0
	print(dp)

	# i 는 1 ~ 11 까지
	for i in range(1, amount + 1):
		for c in coins:
			# 해당 동전이 거슬러질 수 있으면
			if i >= c:
				print(f'min1 : {i - c}, {dp[i-c]} and {i}, {dp[i]}')
				# 해당 동전을 취하면 +!, 그렇지 않으면 그대로 +0
				dp[i] = min(dp[i - c] + 1, dp[i])
				print(f'update : {dp[i]}')

	return dp[amount]


coins = [1, 2, 5]
amount = 11
res = coin_change(coins, amount)
print(res)
