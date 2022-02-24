
# n, m ,k  = map(int, input().split())
# data = list(map(int, input().split()))

n, m, k = 3, 10, 10
data = [6, 10, 3]
# print(data)

data.sort()
# print(data)

first = data[n - 1]
second = data[n - 2]
# print(first, second)

result = 0

# while True:
# 	for i in range(k):
# 		if m == 0:
# 			break
#
# 		result += first
# 		m -= 1
#
# 	if m == 0:
# 		break
# 	result += second
# 	m -= 1

count = int(m // (k + 1) * k)
count += m % (k + 1)


result += count * first
result += (m - count) * second

print(result)

# 문제를 해결할 때는 손으로 먼저 풀어보고 규칙을 찾자. (특히나 배열의 순서가 있는지?)