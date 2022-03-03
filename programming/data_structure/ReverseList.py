from LinkedList import *


def reverseList(head: Node) -> Node:
	prev = None
	curr = head

	while curr is not None:
		next_temp = curr.next

		curr.next = prev
		prev = curr
		curr = next_temp

	return prev


def reverseList2(head: LinkedList) -> LinkedList:
	if head is None:
		return head

	stack = []
	curr = head

	while curr.next is not None:
		stack.append(curr)
		curr = curr.next

	first = curr

	while stack:
		curr.next = stack.pop()
		curr = curr.next

	curr.next = None
	return first


def reverseList3(head: Node) -> Node:
	if head is None or head.next is None:
		return head

	reversed_list = reverseList3(head.next)
	head.next.next = head
	head.next = None

	return reversed_list
