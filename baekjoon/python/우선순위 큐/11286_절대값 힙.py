from heapq import heappush, heappop
import sys

n = int(input())

heap =[]
for _ in range(n):
    num = int(sys.stdin.readline())
    if(num == 0):
        sys.stdout.write(str(heappop(heap)[1])+'\n' if len(heap) else '0\n')
    else:
        heappush(heap, (abs(num), num))