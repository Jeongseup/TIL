from typing import List


def exist(board: List[List[str]], word: str) -> bool:
	direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

	def search_direction(x: int, y: int, subword: str):
		# board 배열에 접근 가능한 인덱스를 넘어선다면 False
		if (x < 0 or x >= len(board)) or \
				(y < 0 or y >= len(board[0])):
			return False

		# 첫 문자가 일치하지 않으면 False?
		# 복귀 못하게 되는 이유도 여기서 걸려서
		if board[x][y] != subword[0]:
			return False

		# 일치한 상태에서, 남은 길이가 1이라면 True
		if len(subword) == 1:
			return True

		# 복귀 못하도록
		board[x][y] = '.'

		for i, j in direction:
			# 다음 문자부터 해서 재귀
			if search_direction(x + j, y + i, subword[1:]):
				# 다 찾은 경우 True
				return True

		# 추적 실패하면 원래 문자로 넣어줌
		board[x][y] = subword[0]
		return False

	res = False

	for x in range(len(board)):
		for y in range(len(board[0])):
			if board[x][y] == word[0] and search_direction(x, y, word):
				res = True
				break

	return res


board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'E', 'S'],
	['A', 'D', 'E', 'E']
]

# x, y  보다 row, col 이라 보는게 이해하기 쉬울듯?
print(len(board), len(board[0]))

word = 'BFEE'
# print(exist(board, word))