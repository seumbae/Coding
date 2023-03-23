import sys
n, m = map(int, input().split())

set = set(sys.stdin.readline().rstrip() for _ in range(n))
strings = [sys.stdin.readline().rstrip() for _ in range(m)]

ans = 0

for string in strings:
    if(string in set): ans += 1

print(ans)