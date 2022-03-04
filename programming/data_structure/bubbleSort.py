def bubble_sort(arr):
	n = len(arr)

	for i in range(n):
		done_sort = True

		for j in range(n - i - 1):
			if arr[j] > arr[j + 1]:
				arr[j], arr[j + 1] = arr[j + 1], arr[j]

				done_sort = False

		if done_sort:
			break

	return arr

input_arr = [8,2,6,4,5]
print(f'{bubble_sort(input_arr)}')