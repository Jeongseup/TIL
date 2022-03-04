def binary_search(arr, key, start, end):
	if end - start <= 1:
		if arr[start] > key:
			return start - 1
		else
			return start

	mid = (start + end) // 2

	if arr[mid] < key:
		return binary_search(arr, key, mid, end)
	elif arr[mid] > key:
		return binary_search(arr, key, start, mid)
	else:
		return mid

def insertion_sort(arr, run_s=0, run_e=None):
	if run_e is None:
		run_e = len(arr) - 1

	for i in range(run_s +1, run_e+1):
		v = arr[i]
		pos = binary_search(arr, v, run_s, i) + 1

		for k in range(i, pos, -1):
			arr[k] = arr[k - 1]

		arr[pos] = v


def timsort(arr):
	mid_run = 32
	n = len(arr)

	for i in range(0, n, mid_run):
		insertion_sort(arr, i, min((i + mid_run - 1), n - 1))

	size = mid_run
	while size < n:
		for start in range(0, n, size * 2):
			mid = start + size -1
			end = min((start+ size * 2 -1), (n-1))

			merged = merge(arr[start:mid +1], arr[mid+1:end +1])
			arr[start:start + len(merged)] = merged

		size *= 2

	return arr
