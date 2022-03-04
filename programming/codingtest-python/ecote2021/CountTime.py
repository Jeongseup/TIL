
# 시간 입력
h = 6

def count_time(n: int) -> int:
	count = 0

	# 시간을 초기화하는게 중요한데..
	# 이걸 그냥 brute-force 해버릴 수 있음
	for h in range(n + 1):
		for m in range(60):
			for s in range(60):
				# 매 시각 마다 3이 포함되어 있으면 카운트 증가
				if '3' in str(h) + str(m) + str(s):
					count += 1

	return count

