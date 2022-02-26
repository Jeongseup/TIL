# h = int(input())
h = 5
count = 0

for i in range(h + 1):
	# print(i)
	for j in range(60):
		for k in range(60):
			# print(str(i) + (str(j) + str(k)))
			if '3' in str(i) + str(j) + str(k):
				count += 1

print(count)
