from collections import deque
import sys

n = int(input())
deq = deque()

ans = []
for _ in range(n):
    cmd = sys.stdin.readline().rstrip().split()
    if(cmd[0] == 'push_front'):
        deq.appendleft(int(cmd[1]))
    elif(cmd[0] == 'push_back'):
        deq.append(int(cmd[1]))
    elif(cmd[0] == 'pop_front'):
        ans.append(deq.popleft() if len(deq) else -1)
    elif(cmd[0] == 'pop_back'):
        ans.append(deq.pop() if len(deq) else -1)
    elif(cmd[0] == 'size'):
        ans.append(len(deq))
    elif(cmd[0] == 'empty'):
        ans.append(0 if len(deq) else 1)
    elif(cmd[0] == 'front'):
        ans.append(deq[0] if len(deq) else -1)
    elif(cmd[0] == 'back'):
        ans.append(deq[-1] if len(deq) else -1)
print('\n'.join(map(str, ans)))