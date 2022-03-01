from typing import List


# [hashTable]두 수의 합 구하기
def twoSum(nums: List[int], target: int) -> List[int]:
	hash_table_dict = {}

	for i in range(0, len(nums)):
		value = target - nums[i]

		if hash_table_dict.get(value) is not None and hash_table_dict[value] != i:
			return sorted([i, hash_table_dict[value]])

		hash_table_dict[nums[i]] = i

	return [-1, -1]


# [basic module]중복값 제거하기
def myRemoveDuplicates(nums: List[int]) -> List[int]:
	if len(nums) <= 0:
		return 0

	tempSet = set(nums)
	return list(tempSet)


# [Binary] insert 위치 찾기
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

