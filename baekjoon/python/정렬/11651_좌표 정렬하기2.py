import sys

n = int(input())
numbers = sorted([list(map(int, sys.stdin.readline().split())) for _ in range(n)], key=lambda x: (x[1], x[0]))

for arr in numbers:
    print(*arr)