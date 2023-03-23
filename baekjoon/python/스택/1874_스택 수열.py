import sys
n = int(input())

stack = []

cur = 1

ans = ''
flag = True
for _ in range(n):
    num = int(sys.stdin.readline().rstrip())
    if(num < cur and not stack): 
        flag = False
        break

    while(cur <= num):
        stack.append(cur)
        cur += 1
        ans += '+'
    
    while(stack):
        ans += '-'
        if(stack.pop() == num): break
    
print('NO' if not flag else '\n'.join(ans))