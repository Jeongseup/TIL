def sequentialSearch(array, value):
	for i in range(len(array)):
		if array[i] == value:
			return i

	return False

x = [5, 2, 8, 6, 1, 9, 3]
print(sequentialSearch(x, 3))