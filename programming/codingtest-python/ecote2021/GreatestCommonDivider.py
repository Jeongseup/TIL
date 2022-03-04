from math import gcd


def greatest_common_devider(n1, n2):
	# 유클리드 호제법 constraint
	# if n2 > n1:
	# 	n1, n2 = n2, n1

	# base case
	if n1 % n2 == 0:
		return n2

	else:
		# recursive
		return greatest_common_devider(n2, n1 % n2)


# 왜 A > B 를 바꿔도 잘 돌아가는거지?
# print(162 % 192, 192 % 162)
print(gcd(192, 162))
print(greatest_common_devider(162, 192))
