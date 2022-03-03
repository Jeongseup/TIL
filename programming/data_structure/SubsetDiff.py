import sys
from typing import List


min_diff = sys.maxsize
total = 0


def subset_diff(index: int, nums: List[int], subnum:int):
	global total, min_diff
	# 베이스 케이스
	if index == len(nums):
		print(total, subnum)
		min_diff = min(min_diff, abs((total -  subnum) - subnum))
		return

	subset_diff(index + 1, nums, subnum + nums[index])
	subset_diff(index + 1, nums, subnum)


nums = [3, 2, 4, 7, 1]
total = sum(nums)
print(total)


subset_diff(0, nums, 0)
print(min_diff)