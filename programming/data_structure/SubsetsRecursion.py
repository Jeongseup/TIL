# print(bin(3), bin(0), bin(7))

# for i in range(3):
# 	print(f'binary number is from {i} to {bin(i)}')

# print(pow(2, 3), 2 ** 3)
from typing import List


def subsetsRecursion(nums: List[int], res: List[List[int]], sub: List[int], index) -> None:
	if len(sub) > len(nums):
		return

	res.append(sub.copy())

	for i in range(index, len(nums)):
		sub.append(nums[i])
		subsetsRecursion(nums, res, sub, i + 1)
		sub.pop()

	return res


def subsets(nums: List[int]) -> List[List[int]]:
	res = []
	nums_len = len(nums)

	# nums_len 값을 왼쪽 쉬프트에서 2배로 한다.
	nth_bit = 1 << nums_len

	for i in range(2 ** nums_len):
		# 바이너리 처리한 값에 다가 0b를 다음 부터
		bitmask = bin(i | nth_bit)[3:]

		res.append(
				[nums[j] for j in range(nums_len) if bitmask[j] == '1']
		)

	return res


for i in range(3, 3):
	print(i)

# nums = [1, 2, 3]
# res = []
# sub = []
# print(subsetsRecursion(nums, res, sub, 0))

