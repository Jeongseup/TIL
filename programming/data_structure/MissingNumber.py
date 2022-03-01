from typing import List


def missingNumber(nums: List[int]) -> int:
	nums.sort()

	# 마지막 숫자 확인
	if nums[-1] != len(nums):
		return len(nums)

	# 첫 숫자 확인
	if nums[0] != 0:
		return 0

	for i in range(1, len(nums)):
		expected = nums[i - 1] + 1
		if expected != nums[i]:
			return expected

	return -1


def missingNumber2(nums: List[int]) -> int:
	set_nums = set(nums)

	# 빠진 수 때문에
	for i in range(len(nums) + 1):
		if i not in set_nums:
			return i

	return -1

def missingNumber3(nums: List[int]) -> int:
	missing = len(nums)

	for i in range(len(nums)):
		missing = missing ^ i ^ nums[i]

	return missing

def missingNumber4(nums: List[int]) -> int:
	n = len(nums)
	expected_sum = int( n * (n + 1) / 2)

	real_sum = sum(nums)

	return expected_sum - real_sum

# nums = [0]
# print(missingNumber4(nums))

print(4 ^ 0 ^ 0)