class Node:
	def __init__(self, data, next=None):
		self.data = data
		self.next = next


def init():
	global node1

	node1 = Node(1)
	node2 = Node(2)
	node3 = Node(3)
	node4 = Node(4)

	node1.next = node2
	node2.next = node3
	node3.next = node4


def delete(del_data):
	global node1

	pre_node = node1
	next_node = pre_node.next

	if pre_node.data == del_data:
		node1 = next_node
		del pre_node
		return

	while next_node:
		if next_node.data == del_data:
			pre_node.next = next_node.next
			del next_node
			break

		pre_node = next_node
		next_node = next_node.next


def insert(ins_data):
	global node1

	new_node = Node(ins_data)
	new_node.next = node1
	node1 = new_node


def print_list():
	global node1
	node = node1

	while node:
		print(node.data)
		node = node.next
	print()


def LinkedList():
	init()
	print_list()
	# print(node1.data, no)

	delete(2)
	insert("9")
	print_list()

LinkedList()
