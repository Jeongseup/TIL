class Node:

	def __init__(self, data):
		self.left = None
		self.right = None
		self.data = data

	def __repr__(self):
		return str(self.data)

# root = Node(11)
# print(root)

class BinarySearchTree:

	def __init__(self):
		self.__root = None

	def insert(self, data, method='iterative'):
		if method in 'recursion':
			self.__root = self._insert_rec(self.__root, data)
		else:
			self._insert_iter(data)

	def _insert_rec(self, node, data):
		# root 노드면
		if not node:
			node = Node(data)
			return
		else:
			print(node.data, data)
			if node.data > data:
				node.left = self._insert_rec(node.left, data)
			else:
				node.right = self._insert_rec(node.right, data)

		return node

	def _insert_iter(self, data):
		# root is None
		if not self.__root:
			self.__root = Node(data)
			return

		# create new node
		new_node = Node(data)

		curr = self.__root
		parent = None

		while (curr != None):
			parent = curr
			if curr.data > data:
				curr = curr.left
			else:
				curr = curr.right

		if parent.data > data:
			parent.left = new_node
		else:
			parent.right = new_node

	def inorder_traverse(self):
		result = []
		self._insert_rec(self.__root, result)
		return result

	def _inorder_rec(self, node, result):
		# 노드가 없는 마지막에 다다르면
		if not node:
			return

		self._insert_rec(node.left, result)
		result.append(node.data)
		self._insert_rec(node.right, result)

	def inorder_iter(self):
		result = []
		stack = []

		node = self.__root
		while node or stack:
			while node:
				stack.append(node)
				node = node.left
			if stack:
				node = stack.pop()
				result.append(node)
				node = node.right

		return result


bst = BinarySearchTree()
bst.insert(20, method='recursion')
bst.insert(25, method='recursion')
bst.insert(14, method='recursion')
bst.insert(30, method='recursion')
bst.insert(18, method='recursion')
bst.insert(11, method='recursion')

print(bst.inorder_traverse())


