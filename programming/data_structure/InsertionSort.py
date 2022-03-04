def insertion_sort(arr):
	n = len(arr)

	for i in range(1, n):
		# 딜러에게 받는 숫자
		key_item = arr[i]
		j = i - 1

		while j >= 0 and arr[j] > key_item:
			print(f'{arr[j+1], arr[j]}')
			arr[j+1] = arr[j]
			print(arr)
			j -= 1

		print(j)
		arr[j+1] = key_item
		print(arr)
		print()
	return arr

input_arr = [8,2,6]
print(f'{insertion_sort(input_arr)}')

