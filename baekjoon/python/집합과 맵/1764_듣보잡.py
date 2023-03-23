import sys

n, m = map(int, sys.stdin.readline().rstrip().split())
list1 = set(sys.stdin.readline().rstrip() for _ in range(n))
list2 = set(sys.stdin.readline().rstrip() for _ in range(m))

ans = sorted(list(list1.intersection(list2)))
print(len(ans))
print('\n'.join(ans))