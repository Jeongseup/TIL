import heapq

heap = []

heapq.heappush(heap, 35)
print(heap)
heapq.heappush(heap, 33)
print(heap)
heapq.heappush(heap, 42)
print(heap)

test_list = [35, 44, 42, 10 , 14]
heapq.heapify(test_list)
print(test_list)

heap_max = [item * -1 for item in test_list]
print(heap_max)

heapq.heapify(heap_max)
print(heap_max)

heap_max = [item * -1 for item in heap_max]
print(heap_max)