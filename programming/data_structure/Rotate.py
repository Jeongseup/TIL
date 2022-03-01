from typing import List


def rotate(nums: List[int], k: int) -> None:
	for _ in range(k):
		prev = nums[len(nums) - 1]
		for i in range(len(nums)):
			temp = nums[i]
			nums[i] = prev
			prev = temp


def rotate2(nums: List[int], k: int) -> None:
	temp = [0] * len(nums)

	for i, item in enumerate(nums):
		print(i, item, nums[i])
		print((i + k) % len(nums))
		temp[(i + k) % len(nums)] = nums[i]

	nums[:] = temp


def rotate3(nums: List[int], k: int) -> None:
	count = 0

	for start in range(len(nums)):
		if count >= len(nums):
			break

		curr_index = start
		prev_element = nums[start]

		while True:
			next_index = (curr_index + k) % len(nums)
			temp = nums[next_index]

			nums[next_index] = prev_element
			prev_element = temp

			curr_index = next_index
			count +=1

			if curr_index == start:
				break

def rotate4(nums: List[int], k: int) -> None:
	print('start')
	k = k % len(nums)
	print(k)

	nums[:] = nums[::-1]
	print(nums)

	print(nums[0:k][::-1])
	nums[0:k] = nums[0:k][::-1]

	print(nums[k:len(nums)][::-1])
	nums[k:len(nums)] = nums[k:len(nums)][::-1]

test_list = [1, 2, 3, 4]
print(test_list)

# test_list[1:3] = reversed(test_list[1:3])
k = 3

# print(test_list)
# rotate2(test_list, k)
# print(test_list)
rotate4(test_list, k)