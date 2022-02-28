def insertSort(x):
	for size in range(1, len(x)):
		print(size)
		val = x[size]
		print(val)
		i = size
		print(i)
		print("시작")
		while i > 0 and x[i-1] > val:
			print(x[i-1], x[i])

			x[i] = x[i-1]
			print(x[i-1], x[i])

			i -= 1

		x[i] = val
		print(x)


x = [5, 2, 8, 6, 1, 9, 3, 7]
insertSort(x)
print(x)