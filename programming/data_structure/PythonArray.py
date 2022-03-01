import array as arr

int_array = arr.array('i', [1, 2, 3])
# print(int_array, type(int_array))

print("elements in array : ", end="")
for i in range(0, len(int_array)):
	print(int_array[i], end=" ")
print()  # new line 처리

# end의 기본 값은 newline
print("Hello", end=" ")
print("World")

int_list = [1, 2, 3, 4, 5]
int_arr = arr.array('i', int_list)
print(int_arr.index(3))