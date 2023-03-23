import sys
k = int(input())

stack = []
for _ in range(k):
    num = int(sys.stdin.readline().rstrip())
    stack.append(num) if num else stack.pop()
print(sum(stack))