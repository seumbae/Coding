import sys
n = int(input())

words = sorted(set([sys.stdin.readline().rstrip() for _ in range(n)]), key=lambda x: (len(x), x))
print('\n'.join(words))