import time

n = 1260
count = 0
coin_types = [500, 100, 50, 10]

start_time = time.time()

# O(K) N에 무관한 시간복잡도
for coin in coin_types:
	count += n // coin
	n %= coin

end_time = time.time()


print(f'시간측정 {(end_time - start_time):.20f}')
print(count)

# 하지만 이런 문제는 400원 짜리가 껴 있는 경우 정답이 달라진다.
