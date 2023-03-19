import sys
a, b = map(int, sys.stdin.readline().rstrip().split())
if a == b:
  print('==')
elif a < b:
  print('<')
else:
  print('>')

# 삼항연산자: [True] if [Condition] else [False]