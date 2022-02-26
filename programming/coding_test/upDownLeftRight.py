# n = int(input())
n = 5

x, y = 1, 1

# plans = input().split()
plans = ['R', 'R', 'R', 'U', 'D', 'D']

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

move_types = ['L','R','U','D']

for plan in plans:
	# print(plan)
	for i in range(len(move_types)):
		if plan == move_types[i]:
			nx = x + dx[i]
			ny = y + dy[i]

	# 만약 범위를 벗어나면 for 문 내부에서 continue 처리
	if nx < 1 or ny < 1 or nx > n or ny > n:
		continue

	x, y = nx, ny

print(x, y)