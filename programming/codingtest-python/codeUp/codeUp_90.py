# 시작 값(a), 곱할 값(m), 더할 값(d), 몇 번째인지를 나타내는 정수(n)

def sequences(start, multiple, add, n):
	print("시작", start)
	for i in range(n - 1):
		start = multiple * start + add
		# print(start)
	return start


# 1 -2 1 8
# -85

result = sequences(1, -2, 1, 8)
print(result)