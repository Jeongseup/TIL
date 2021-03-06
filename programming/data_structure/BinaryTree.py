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
                        f'Missing parent node at index {parent_index},'
                        f' Node({node.data})')
                if index % 2 == True:
                    parent.left = node
                else:
                    parent.right = node

    def inorder_traverse(self, head = None):
        result = []

        if head == None:
            self._inorder_rec(self.__root, result)
        else:
            self._inorder_rec(head, result)

        return result

    def _inorder_rec(self, node, result):
        if not node:
            return

        self._inorder_rec(node.left, result)
        result.append(node.data)
        self._inorder_rec(node.right, result)

    def depth_first_search(self):
        # res_iter = []
        # res_iter = self.dfs_iter()

        # print(f'dfs iter : {res_iter}')

        res_rec = []
        self.dfs_rec(self.__root, res_rec)
        print(f'dfs_rec : {res_rec}')

    def dfs_iter(self):
        if not self.__root:
            return []

        stack = []
        result = []
        stack.append(self.__root)

        while len(stack) != 0:
            node = stack.pop()

            result.append(node.data)

            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)

        return result

    def dfs_rec(self, node, result):

        if not node:
            return

        result.append(node.data)
        if node.left:
            self.dfs_rec(node.left, result)
        if node.right:
            self.dfs_rec(node.right, result)

    def breath_first_search(self):
        queue = deque()
        res = []

        queue.append(self.__root)
        while len(queue) != 0:
            qsize = len(queue)

            for _ in range(qsize):
                node = queue.popleft()

                # ?????? ????????? ?????????
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                res.append(node.data)

        print(f'breath first search : {res}')