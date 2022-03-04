def merge(left, right):
	left_len = len(left)
	right_len = len(right)

	result = []
	left_index = right_index = 0

	while len(result) < left_len + right_len:
		if left[left_index] <= right[right_index]:
			result.append(left[left_index])
			left_index += 1
		else:
			result.append(right[right_index])
			right_index += 1

		if right_index == right_len:
			result.extend(left[left_index:])
			break

		if left_index == left_len:
			result.extend(right[right_index:])
			break

	return result


def merge_sort(arr):
	n = len(arr)
	if n < 2:
		return arr

	mid_index = n // 2
	left = merge_sort(arr[:mid_index])
	right = merge_sort(arr[mid_index:])

	return merge(left, right)
