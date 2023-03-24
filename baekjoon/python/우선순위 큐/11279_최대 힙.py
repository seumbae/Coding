from heapq import heappush, heappop
import sys

n = int(input())

heap = []
for _ in range(n):
    num = int(sys.stdin.readline().rstrip())
    if(num == 0):
        sys.stdout.write(str(-heappop(heap))+'\n' if len(heap) else '0\n')
    else:
        heappush(heap, -num)