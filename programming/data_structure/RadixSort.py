def radix(order):
	is_sorted = False
	position = 1

	while not is_sorted:
		is_sorted = True
		print(position)
		queue_list = [list() for _ in range(10)]

		for num in order:
			digit_number = (int) (num / position) % 10
			print(digit_number)
			queue_list[digit_number].append(num)
			# print(queue_list)

			if is_sorted and digit_number > 0:
				is_sorted = False

		index = 0

		print(queue_list, end="queue \n")
		for numbers in queue_list:
			print(numbers)

			for num in numbers:
				order[index] = num
				index += 1

		position *= 10

x = [5, 2, 8, 6, 1, 9, 3, 7]
# radix(x)
# print(x)