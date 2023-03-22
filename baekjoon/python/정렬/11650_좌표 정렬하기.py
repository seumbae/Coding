import sys

n = int(input())
numbers = sorted([list(map(int, sys.stdin.readline().split())) for _ in range(n)])
for arr in numbers:
    print(*arr)
