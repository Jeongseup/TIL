map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 1, 2, 1, 0, 1],
	[1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]


def printMap(map):
	for arr in map:
		print(arr)


# 0, 1 이 내려가는 것
# 1, 0 이 오른쪽으로 이동하는 것

def goAnt(map, i, j):
	if i == 1 and j == 1:
		map[i][j] = 9

	if map[i + 1][j] == 2:
		map[i + 1][j] = 9
		return

	# 오른쪽 갈 수 있는지 확인
	if map[i][j + 1] != 1:
		map[i][j + 1] = 9
		# printMap(map)
		# print("move right")
		goAnt(map, i, j + 1)
	else:
		map[i + 1][j] = 9
		# printMap(map)
		# print("move down")
		goAnt(map, i + 1, j)

	return map


# map[1][1+1] = 9
# print(map[1][1])

printMap(map)
print()
result = goAnt(map, 1, 1)
printMap(result)
