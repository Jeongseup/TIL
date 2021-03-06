from collections import deque


class Node:
	def __init__(self, data):
		self.left = None
		self.right = None
		self.data = data

	def __repr__(self):
		return str(self.data)

class BinaryTree:

	def __init__(self):
		self.__root = None

	@property
	def root(self):
		return self.__root

	def create_bst(self, nodes_list):
		nodes = [None if item is None else Node(item)
				 for item in nodes_list]

		# root node
		self.__root = nodes[0]

		for index in range(1, len(nodes)):
			node = nodes[index]

			if node is not None:
				parent_index = (index - 1) // 2
				parent = nodes[parent_index]

				if parent is None:
					raise ValueError(
							f'Missing parent node at index {parent_index}'
							f' Node({node.data})')

				if index % 2 == True:
					parent.left = node
				else:
					parent.right = node

def pathSum(root: Node, sum: int) -> int:
	cnt = 0

	if root == None:
		return cnt

	def pathSumSub(node: Node, target: int) -> int:
		if node == None:
			return 0

		return (1 if (target - node.data) == 0 else 0) + \
			   pathSumSub(node.left, target - node.data) + \
			   pathSumSub(node.right, target - node.data)

	queue = deque()
	queue.append(root)

	while len(queue) != 0:
		q_size = len(queue)

		for _ in range(q_size):
			node = queue.popleft()

			cnt += pathSumSub(node, sum)

			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)

	return cnt


