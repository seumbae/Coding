T = int(input())

for _ in range(T):
    strings = input()
    stack = []
    ans = 'YES'
    for string in strings:
        if(string == '('):
            stack.append(string)
        else:
            if(len(stack) == 0 or stack[-1] != '('):
                ans = 'NO'
                break
            else:
                stack.pop()
    print('NO' if stack else ans)