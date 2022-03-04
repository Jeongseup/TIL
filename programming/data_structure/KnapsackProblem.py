def knapsack_dp(dp, values, weights, capa, curr_index):
	# recursion base case
	if capa <= 0 or curr_index >= len(values):
		return 0

	if dp[curr_index][capa] != -1:
		return dp[curr_index][capa]

	selected = 0
	if weights[curr_index] <= capa:
		selected = values[curr_index] + \
				   knapsack_dp(dp, values, weights,
							   capa - weights[curr_index], curr_index + 1)

	not_selected = knapsack_dp(dp, values, weights, capa, curr_index + 1)

	dp[curr_index][capa] = max(selected, not_selected)
	return dp[curr_index][capa]


# capa * values(아이템 개수)
dp1 = [[-1 for _ in range(8)] for _ in range(4)]
print(knapsack_dp(dp1, values=[1,6,10,16], weights=[1,2,3,5], capa=7, curr_index=0))
