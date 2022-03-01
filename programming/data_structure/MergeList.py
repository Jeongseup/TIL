from typing import List


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
	for i, v in enumerate(nums2):
		nums1[m + i] = v

	nums1[:] = sorted(nums1)


# def append_element(in_list):
# 	in_list[:] = [3, 4]

def merge2(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
	i = m - 1
	j = n - 1
	index = m + n - 1

	while i >= 0 and j >= 0:
		if nums1[i] < nums2[j]:
			nums1[index] = nums2[j]
			j -= 1
		else:
			nums1[index] = nums1[i]
			i -= 1

		index -= 1

	while j >= 0:
		nums1[index] = nums2[j]
		index -= 1
		j -= 1


if __name__ == "__main__":
	nums1 = [1, 2, 3, 0, 0, 0]
	m = 3

	nums2 = [4, 5, 6]
	n = 3

	print(nums1)
	merge2(nums1, m, nums2, n)
	print(nums1)
