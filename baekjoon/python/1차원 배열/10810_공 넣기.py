import sys
N, M = map(int, sys.stdin.readline().split())

basket = [0 for _ in range(N)]

for _ in range(M):
    i, j, k = map(int, sys.stdin.readline().split())
    for idx in range(i-1, j):
        basket[idx] = k
print(*basket)