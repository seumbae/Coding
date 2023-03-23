from collections import deque
import sys

n = int(input())
deq = deque()

ans = []
for _ in range(n):
    cmd = sys.stdin.readline().rstrip()

    if(cmd == 'front'):
        ans.append(deq[0] if len(deq) else -1)
    elif(cmd == 'back'):
        ans.append(deq[-1] if len(deq) else -1)
    elif(cmd == 'empty'):
        ans.append('0' if len(deq) else 1)
    elif(cmd == 'size'):
        ans.append(len(deq))
    elif(cmd == 'pop'):
        ans.append(deq.popleft() if len(deq) else -1)
    else:
        deq.append(int(cmd.split()[1]))
print('\n'.join(map(str, ans)))
