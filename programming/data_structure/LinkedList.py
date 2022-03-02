from typing import Any


class Node:
	def __init__(self, data: Any):
		self.data = data
		self.next = None


class LinkedList:
	def __init__(self):
		self.head = None

	def traverse(self):
		temp = self.head

		while temp:
			print(temp.data, end=" ")
			temp = temp.next
		print()

	def push_back(self, data: Any):
		new_node = Node(data)

		if self.head is None:
			self.head = new_node
			return

		last = self.head
		while last.next:
			last = last.next

		last.next = new_node

	def push(self, data: Any):
		new_node = Node(data)

		if self.head is None:
			self.head = new_node
			return

		temp = self.head
		self.head = new_node
		new_node.next = temp

	def remove(self, data: Any):
		curr = self.head
		prev = None

		# head의 요소가 지워지는 요소 일 때 처리
		if curr is not None:
			if curr.data == data:
				self.head = curr.next
				curr = None
				return

		while curr is not None:
			if curr.data == data:
				break

			prev = curr
			curr = curr.next

		# 지우려는 data를 찾지 못 했을 때
		if curr == None:
			return

		prev.next = curr.next
		curr = None

	def remove_node(self, node: Node):
		if node == None:
			return

		if node.next == None:
			node = None
			return

		next_node = node.next
		node.data = next_node.data
		node.next = next_node.next

		next_node = None

linked_list = LinkedList()
# node1 = Node(11)
# linked_list.head = node1
#
# node2 = Node(12)
# node3 = Node(13)
#
# node1.next = node2
# node2.next = node3
#
# linked_list.traverse()
linked_list.push_back(11)
linked_list.push_back(12)
linked_list.push_back(13)
linked_list.push(10)

linked_list.traverse()