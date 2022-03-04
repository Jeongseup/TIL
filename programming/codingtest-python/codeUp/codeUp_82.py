n = 100

for i in range(1, n + 1):
	tempString = str(i)

	for chr in tempString:
		if chr in ["3", "6", "9"]:
			print(chr, "X", end="")
		else:
			print(chr, end="")

	print("", end=" ")


	# if i % 10 == 3:
	# 	print("X", end=' ')
	# else:
	# 	print(i, end=" ")