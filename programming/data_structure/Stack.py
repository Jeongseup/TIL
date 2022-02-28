def Stack():
	stack = []

	stack.append(1)
	stack.append(2)
	stack.append(3)
	stack.append(4)
	stack.append(5)
	print(stack)

	if stack:
		print(stack)

	# 빈 배열은 false, 뭐가 하나라도 들어있으면 true
	if []:
		print("here")

	if not []:
		print('there')

	while stack:
		print(stack)
		print("POP valus is", stack.pop())

Stack()
