empty_list = []
# print(empty_list)
data_list = [1, 2, 3, 4, 5]

init_list = [0 for _ in range(10)]
# print(init_list)

init_list2 = [0] * 10
# print(init_list2)

py_list1 = [1, 2, 3]
py_list2 = [4, 5, 6]

py_list1.extend(py_list2)
# print(py_list1)

py_list3 = [1, 2, 3]
py_list3.insert(3, 4)
# print(py_list3)

py_list3.clear()
# print(py_list3)

print(py_list1)
# del py_list1[1]
# print(py_list1)

# 콜론(:) 연산을 2개 사용했다면 마지막은 step으로 사용한다.
# : (전체를) :-1 스텝으로
print(py_list1[::-1])