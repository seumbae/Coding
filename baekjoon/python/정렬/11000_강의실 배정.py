from heapq import heappush, heappop
from sys import stdin

n = int(input())

rooms = sorted([list(map(int, stdin.readline().rstrip().split())) for _ in range(n)], key=lambda x: (x[0], x[1]))

heap = [rooms[0][1]]

for start, end in rooms[1:]:
    if(start < heap[0]):
        heappush(heap, end)
    elif(heap[0] <= start):
        heappop(heap)
        heappush(heap, end)

print(len(heap))