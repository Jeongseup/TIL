from typing import List


def pyramid_generate() -> list:
	pyramid = []

	for i in range(5):
		col = []
		while i >= 0:
			col.append(0)
			i -= 1
		pyramid.append(col)

	return pyramid


def pascal_generate(numRows: int) -> List[int]:
	pascal = []

	# input이 0이면 그냥 빈 list return
	if numRows <= 0:
		return pascal

	# pascal's triangle init
	pascal.append([1])

	for i in range(1, numRows):
		print(pascal)
		prev_len = len(pascal[i - 1])
		print(prev_len)
		curr_list = []

		for j in range(prev_len + 1):
			print(j)
			num = 1

			# 첫번째와 마지막이 아니면 num은 계산
			if j != 0 and j != prev_len:
				num = pascal[i - 1][j - 1] + pascal[i - 1][j]

			curr_list.append(num)

		pascal.append(curr_list)

	return pascal


test_num = 3
print(pascal_generate(test_num))
