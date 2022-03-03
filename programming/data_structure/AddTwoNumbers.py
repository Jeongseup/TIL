class Node:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next


def addTwoNumbers(l1: Node, l2: Node) -> Node:
	st1 = []
	st2 = []

	l1_curr = l1
	l2_curr = l2

	head = None

	while l1_curr != None:
		st1.append(l1_curr.val)
		l1_curr = l1_curr.next

	while l2_curr != None:
		st2.append(l2_curr.val)
		l2_curr = l2_curr.next

	carry = 0
	while st1 or st2:
		num1 = st1.pop() if st1 else 0
		num2 = st2.pop() if st2 else 0

		carry, num = divmod(num1 + num2 + carry, 10)

		node = Node(num)

		if head == None:
			head = node
		else:
			temp = head
			head = node
			node.next = temp

	if carry != 0:
		node = Node(carry)
		temp = head
		head = node
		node.next = temp

	return head


def addTwoNumbers2(l1: Node, l2: Node) -> Node:
	def reverse(head):
		prev = None
		curr = head

		while curr != None:
			next_temp = curr.next
			curr.next = prev

			prev = curr
			curr = next_temp

		r_l1 = reverse(l1)
		r_l2 = reverse(l2)

		res_head = None
		carry = 0

		while r_l1 != None or r_l2 != None:
			num1 = 0
			num2 = 0

			if r_l1 != None:
				num1 = r_l1.val
				r_l1 = r_l1.next

			if r_l2 != None:
				num2 = r_l2.val
				r_l2 = r_l2.next

			carry, num = divmod(num1 + num2 + carry, 10)

			node = Node(num)
			if res_head == None:
				res_head = node
			else:
				temp = res_head
				res_head = node
				node.next = temp

		if carry != 0:
			node = Node(carry)
			temp = res_head
			res_head = node
			node.next = temp

		return res_head

from LinkedList import LinkedList

def addTwoNumbers(l1: Node, l2: Node) -> Node:
	num1_str = ""
	num2_str = ""

	l1_curr = l1
	l2_curr = l2

	while l1_curr != None:
		num1_str = num1_str + str(l1_curr.val)
		l1_curr = l1_curr.next

	while l2_curr != None:
		num2_str = num2_str + str(l2_curr.val)
		l2_curr = l2_curr.next

	res_num = int(num1_str) + int(num2_str)

	head = LinkedList(-1)
	curr = head
	for num_ch in str(res_num):
		curr.next = Node(int(num_ch))
		curr = curr.next

	curr.next = None
	return head.next

