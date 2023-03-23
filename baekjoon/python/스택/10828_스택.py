import sys
class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, val):
        self.stack.append(val)
    
    def pop(self):
        if len(self.stack) == 0:
            return -1
        else:
            return self.stack.pop()
    
    def size(self):
        return len(self.stack)

    def empty(self):
        return 0 if self.stack else 1
    
    def top(self):
        return self.stack[-1] if self.stack else -1

n = int(input())
stack = Stack()
ans = ''
for _ in range(n):
    cmd = input()
    if cmd == 'top':
        ans += str(stack.top())+'\n'
    elif cmd == 'size':
        ans += str(stack.size())+'\n'
    elif cmd == 'pop':
        ans += str(stack.pop())+'\n'
    elif cmd == 'empty':
        ans += str(stack.empty())+'\n'
    else:
        stack.push(int(cmd.split()[1]))
print(ans)