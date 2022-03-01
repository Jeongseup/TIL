from typing import List


def myRemoveDuplicates(nums: List[int]) -> List[int]:
	if len(nums) <= 0:
		return 0

	tempSet = set(nums)
	return list(tempSet)

def removeDuplicates(nums: List[int]) -> List[int]:
	if len(nums) <= 0:
		return 0

	curr = nums[0]
	count = 1

	for i in range(1, len(nums)):
		if curr != nums[i]:
			curr = nums[i]
			nums[count] = curr # 이건 count 값이랑 배열이랑 같이 반환해야 한다면 사용
			count += 1

	return count


if __name__ == "__main__":
	# print("main")
	test_list = [0, 0, 0, 1, 1, 2]
	output = removeDuplicates(test_list)
	print(output)