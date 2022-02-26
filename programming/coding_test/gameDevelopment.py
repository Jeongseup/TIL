# n, m = map(int, input().split())
n, m = 4, 4
# 방문할 맵 초기화
d = [[0] * m for _ in range(n)]

# x, y, direction = map(int, input().split())
x, y, direction = 1, 1, 0

# 현재 위치 방문 처리
d[x][y] = 1

# print(d)
array = [[1, 1, 1, 1, ], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]
# for i in range(n):
# array.append(list(map(int, input().split())))


# 북 동 남 서 방향 정의
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def turn_left():
	global direction
	direction -= 1

	if direction == -1:
		direction = 3


count = 1
turn_time = 0

while True:
	print(x, y, direction)

	# 먼저 회전하고
	turn_left()
	# 가보고
	next_x = x + dx[direction]
	next_y = y + dy[direction]

	# 가보지 않았던 땅이면?
	print(next_x, next_y)
	if d[next_x][next_y] == 0 and array[next_x][next_y] == 0:
		# 체크
		d[next_x][next_y] = 1
		# 좌표 이동
		x = next_x
		y = next_y

		count += 1
		turn_time = 0
		continue
	# 가보지 않은 칸이 없거나 바다인 경우
	else:
		turn_time += 1

	# 네 방향 모두 갈 수가 없는 경우
	if turn_time == 4:
		next_x = x - dx[direction]
		next_y = y - dy[direction]

		if array[next_x][next_y] == 0:
			print('here', x, y)
			x = next_x
			y = next_y
		else:
			print('there', x, y, direction)
			break

		turn_time = 0

print(count)
