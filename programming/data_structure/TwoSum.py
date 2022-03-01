# Brute Force 방법으로 문제 풀이
from typing import List


# 배열의 모든 조합을 target 변수와 비교한다.
def twoSum(nums: List[int], target: int) -> List[int]:
	for i in range(0, len(nums)):
		for j in range(i + 1, len(nums)):
			if (nums[i] + nums[j]) is target:
				return [i, j]
	return [-1, -1]


def twoSum2(nums: list, target: int) -> list:
	for i in range(0, len(nums)):
		for j in range(i + 1, len(nums)):
			if (nums[i] + nums[j]) is target:
				return [i, j]
	return [-1, -1]


def twoSum3(nums: List[int], target: int) -> List[int]:
	hash_table_dict = {}

	for i in range(0, len(nums)):
		value = target - nums[i]

		if hash_table_dict.get(value) is not None and hash_table_dict[value] != i:
			return sorted([i, hash_table_dict[value]])

		hash_table_dict[nums[i]] = i

	return [-1, -1]


if __name__ == '__main__':
	input_list = [2, 7, 10, 19]
	target = 9
	output = twoSum3(input_list, target)
	print(output)
