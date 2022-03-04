from typing import List

n = 5
x, y = 1, 1
input_plans = "R R R U D D"
plans_list = input_plans.split()

move_types = {
	"L": (0, -1),
	"R": (0, +1),
	"U": (-1, 0),
	"D": (+1, 0),
}

def simulation(plans_list: List[int], n: int, x: int, y: int) -> int:
	global  move_types

	for plan in plans_list:
		# print(move_types[plan])

		# next step 옮겨보기
		nx = x + move_types[plan][0]
		ny = y + move_types[plan][1]

		# next step이 정상인지 확인
		if nx < 1 or ny < 1 or nx > n or ny > n:
			continue
		else:
			x, y = nx, ny

	return x, y


result_x, result_y = simulation(plans_list, n, 1, 1)
print(result_x, result_y)
