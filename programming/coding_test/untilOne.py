n, k = 25, 3

result = 0

# while True:
# 	target = (n // k) * k
# 	result += (n - target)
#
# 	n = target
#
# 	if n < k:
# 		break
#
# 	result += 1
# 	n = n // k

# result = result + (n - 1)

while n >= k:
	while n % k != 0:
		n -= 1
		result += 1

	n //= k
	result += 1

while n > 1:
	n -= 1
	result += 1

print(result)