

test = 55

sum = 0
cnt = 1

while True:
	if sum < test:
		sum = sum + cnt
		cnt += 1
	else:
		cnt -= 1
		break

print(sum, cnt)