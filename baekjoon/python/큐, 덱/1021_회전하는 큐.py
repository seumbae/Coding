from collections import deque

n, m = map(int, input().split())
toPop = list(map(int, input().split()))

deq = deque(range(1, n+1))
ans = 0
while(toPop):
    if(toPop[0] == deq[0]):
        toPop.pop(0)
        deq.popleft()
        continue
    
    idx = deq.index(toPop[0])
    if(len(deq)-idx < idx):
        deq.rotate(len(deq)-idx)
        ans += (len(deq)-idx)
    else:
        deq.rotate(-idx)
        ans += idx
print(ans)
