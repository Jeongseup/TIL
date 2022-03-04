# n =
from typing import List

data = [1, 2, 3, 2, 2]
data = sorted(data)


def maximum_guild(people: List[int]) -> int:
	# 총 그룹 수
	result = 0
	# 현재 그룹에 포함된 모험가 수
	member_count = 0

	for power in data:
		member_count += 1
		# 공포도 이상으로 사람이 모이면
		if member_count >= power:
			result += 1
			member_count = 0

	return result


print(maximum_guild(data))