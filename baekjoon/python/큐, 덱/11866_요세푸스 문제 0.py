from collections import deque

n, k = map(int, input().split())
deq = deque([i+1 for i in range(n)])

ans = []
while(deq):
    deq.rotate(-(k-1))
    ans.append(deq.popleft())
print('<{}>'.format(', '.join(map(str, ans))))