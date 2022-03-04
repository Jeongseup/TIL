from random import randint

def quicksort(arr):
	arr_len = len(arr)
	if arr_len < 2:
		return arr

	low, same, high = [], [], []

	pivot = arr[randint(0, arr_len - 1)]

	for item in arr:
		if item < pivot:
			low.append(item)

		elif item == pivot:
			same.append(item)

		elif item > pivot:
			high.append(item)

	# 배열 이어 붙이기
	return quicksort(low) + same + quicksort(high)


input_array = [8,2,6,4,5]
print(f'{quicksort(input_array)}')