class Node:
	def __init__(self, val=0, next=None):
		self.val = val
		self.next = next


def hasCycle(head: Node) -> bool:
	outer = head
	node_cnt = 0

	while (outer != None and outer.next != None):
		outer = outer.next
		node_cnt += 1

		visit = node_cnt
		inner = head

		matched = 0
		while visit > 0:
			if outer != inner:
				inner = inner.next

			if outer == inner:
				matched += 1

			if matched == 2:
				return True

			visit -= 1

		return False


def hasCycle2(head: Node) -> bool:
	curr = head
	node_set = set()

	while curr is not None:
		if curr in node_set:
			return True

		node_set.add(curr)
		curr = curr.next

	return False


def hasCycle3(head: Node) -> bool:
	slow = head
	fast = head

	while fast != None and fast.next != None:
		slow = slow.next
		fast = fast.next.next

		if slow == fast:
			return True

	return False

