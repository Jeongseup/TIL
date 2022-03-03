import heapq
from typing import List


def thirdMax(nums: List[int]) -> int:
	cnt = 0
	third_max = 0

	check_dup = set()

	nums.sort(reverse=True)
	third_max = nums[0]

	for num in nums:
		# 이미 해시테이블에 존재하면 pass
		if num in check_dup:
			continue

		# 없으면 add
		check_dup.add(num)

		if cnt == 2:
			third_max = num
			break

		cnt += 1

	# cnt 가 2가 되지 않고 종료한 경우
	# len이 작아서 그냥 첫번째 값을 리턴

	return third_max


def thirdMax2(nums: List[int]) -> int:
	prio_queue = [item * -1 for item in
				  list(dict.fromkeys(nums))]

	heapq.heapify(prio_queue)

	if len(prio_queue) > 2:
		cnt = 2

		while cnt > 0:
			heapq.heapop(prio_queue)
			cnt -= 1

	return prio_queue[0] * -1


test_list = [3, 2, 3, 4, 5, 4]
print(test_list)

# test_list.sort(reverse=True)

print(list(dict.fromkeys(test_list)))
# print(list(set(test_list)))
print(test_list)
