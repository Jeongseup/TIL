from typing import List


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
	for i, nums1_item in enumerate(nums1):
		if nums1_item > nums2[0]:
			nums1[i] = nums2[0]
			nums2[0] = nums1_item

			# nums2[:] = sorted(nums2)
			print(nums2)
			for k, item in enumerate(nums2[1:], start=1):
				if nums1_item <= item:
					nums2[k-1] = nums1_item
					break

				nums2[k-1] = nums2[k]


if __name__ == "__main__":
	nums1 = [1, 3, 5, 7]
	m = 4

	nums2 = [0, 2, 6, 8, 9]
	n = 5

	print(nums1, nums2)
	merge(nums1, m, nums2, n)
	print(nums1, nums2)
