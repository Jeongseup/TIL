"""
베이스 조건은 next가 없으면 return 그리고 stack에서 꺼냄
"""

def depth_first_search(graph, v, visited):
	# 현재 노드 방문 처리
	visited[v] = True
	print(v, end=" ")

	for i in graph[v]:
		# 만약에 그래프가 무작위로 되어있다면
		# sortin 하고 graph 를 넣어야 할듯

		# 방문 안한 앧르을 만날 때만 in depth
		if not visited[i]:
			depth_first_search(graph, i, visited)

# 그래프 문제는 노드가 1번 부터 그려지기 때문에 0번째 인덱스는 보통 비운다.
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

# visited init
visited = [False] * 9

depth_first_search(graph, 1, visited)