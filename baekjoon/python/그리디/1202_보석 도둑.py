from sys import stdin
from heapq import heappush, heappop
n, k = map(int, stdin.readline().rstrip().split())
jewels = sorted([list(map(int, stdin.readline().rstrip().split())) for _ in range(n)], key=lambda x : (x[0], x[1]))
bags = sorted([int(stdin.readline().rstrip()) for _ in range(k)])

heap = []

ans = 0
idx = 0
for bag in bags:
    while(idx < n and jewels[idx][0] <= bag):
        heappush(heap, -jewels[idx][1])
        idx +=1
    if(heap):
        ans += -heappop(heap)
print(ans)
