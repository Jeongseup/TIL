from collections import deque

def breath_first_search(graph, start, visited):
	# start 부터해서 큐에 넣는다. 이 때 list로 넣어야 함
	queue = deque([start])
	# 큐에 넣었다면 현재 노드를 방문 처리 한다.
	visited[start] = True

	while queue:
		# 방문된 노드를 pop한다.
		v = queue.popleft()
		print(v, end=" ")
		for i in graph[v]:
			if not visited[i]:
				queue.append(i)
				visited[i] = True

graph = [
	[],
	[2, 3, 8],
	[1, 7],
	[1, 4, 5],
	[3, 5],
	[3, 4, ],
	[7],
	[2, 6, 8],
	[1, 7]
]

visited = [False] * 9
breath_first_search(graph, 1, visited)