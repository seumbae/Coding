import re

while(True):
    string = input()
    if(string[0] == '.'): break
    strings = re.sub('\w|\s|[.]','',string)
    stack = []
    
    ans = 'yes'
    for string in strings:
        if string == '(' or string == '[':
            stack.append(string)
        elif string == ')':
            if not stack or stack[-1] != '(':
                ans = 'no'
                break
            else:
                stack.pop()
        elif string == ']':
            if not stack or stack[-1] != '[':
                ans = 'no'
                break
            else:
                stack.pop()
    print('no' if stack else ans)