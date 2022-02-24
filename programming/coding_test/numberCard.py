# n, m = map(int, input().split())
n, m = 3, 3

result = 0

for i in range(n):
	tempArr = list(map(int, input().split()))
	print(tempArr)

	min_value = min(tempArr)
	# 가장 큰 수 인지 체크
	result = max(result, min_value)

print(result)