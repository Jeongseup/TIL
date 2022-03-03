from BinaryTree import Node, BinaryTree

def invertTree(root: Node) -> Node:
	if root == None:
		return

	stack = []
	stack.append(root)

	while (len(stack) > 0):
		node = stack.pop()
		left = node.left

		node.left = node.right
		node.right = left

		if node.left != None:
			stack.append(node.left)

		if node.right != None:
			stack.append(node.right)

	return root


def invertTree(root: TreeNode) -> TreeNode:
	if root == None:
		return None

	# 현재 층의 노드를 좌우 변경
	left = root.left
	root.left = root.right
	root.right = left

	invertTree(root.left)
	invertTree(root.right)

	return root
