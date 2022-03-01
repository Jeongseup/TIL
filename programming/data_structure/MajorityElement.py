from typing import List


def majorityElement(nums: List[int]) -> int:
	majority_count = int(len(nums) / 2)

	for i, item_i in enumerate(nums):
		count = 0

		for j, item_j in enumerate(nums[i:], start=i):
			if item_i == item_j:
				count += 1
			if count > majority_count:
				return item_i

	# 답을 찾지 못한 경우
	return -1


# by using HashTable
def majorityElement2(nums: List[int]) -> int:
	majority_count = int(len(nums) / 2)

	hashmap = {}

	for num in nums:
		# print(f'temp num is {num}', hashmap.get(num))
		if hashmap.get(num) != None:
			hashmap[num] += 1
		else:
			hashmap[num] = 1

		# majority인지 체크
		if hashmap[num] > majority_count:
			return num

	return -1


def majorityElement3(nums: List[int]) -> int:
	return sorted(nums)[int(len(nums) / 2)]


test_list = [1]
# print(majorityElement(test_list))
# print(majorityElement2(test_list))
# print(majorityElement3(test_list))

print(test_list[0:])

# for j, item_j in en