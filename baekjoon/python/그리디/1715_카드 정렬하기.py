from sys import stdin
from heapq import heappush, heappop
n = int(stdin.readline().rstrip())
heap = []
for _ in range(n):
    heappush(heap, int(stdin.readline().rstrip()))

ans = 0

while(len(heap) != 1):
    a, b = heappop(heap), heappop(heap)
    ans += (a+b)
    heappush(heap, a+b)
print(ans)