import sys
N, X = map(int, sys.stdin.readline().split())
# numbers = list(map(int, sys.stdin.readline().split()))
# for a in numbers:
#     if(a < X): print(a, end=' ')
ans = [i for i in map(str, sys.stdin.readline().split()) if int(i)<X]
print(' '.join(ans))