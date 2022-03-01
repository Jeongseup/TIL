from typing import List


# print(sys.maxsize)
# int_value = sys.maxsize + 1
# print(type(int_value), int_value)

def searchInsert(nums: List[int], target: int) -> int:
	index = 0

	while index < len(nums):
		if target <= nums[index]:
			break

		index += 1
	return index


def searchInsert2(nums: List[int], target: int) -> int:
	low = 0
	high = len(nums) - 1

	while low <= high:
		mid = int((low + high) / 2)

		if target == nums[mid]:
			return mid
		if target > nums[mid]:
			low = mid + 1
		else:
			high = mid - 1
	return low


def mySearchInsert(nums: List[int], target: int) -> int:
	# 최악의 경우를 대비하여 미리 체크
	if target < nums[0]:
		return 0
	elif target > nums[-1]:
		return len(nums)
	else:

		low = 0
		high = len(nums) - 1

		while low <= high:
			mid = int((low + high) / 2)

			if target == nums[mid]:
				return mid
			if target > nums[mid]:
				low = mid + 1
			else:
				high = mid - 1
		return low

if __name__ == "__main__":
	test_list = [1, 3, 5, 6]
	target = 4
	print(searchInsert2(test_list, target))
