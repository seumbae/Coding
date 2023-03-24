from collections import deque
def getMaxValueIdx(deq):
    val = [0, 0]
    idx = 0
    for i, v in enumerate(deq):
        if(val[0] < v[0]):
            val = v
            idx =i
    return val, idx

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    priorities = list(map(int, input().split()))

    deq = deque()
    for idx, priority in enumerate(priorities):
        deq.append([priority, idx])
    cnt = 0
    find = deq[M][0]

    while(True):
        maxVal, idx = getMaxValueIdx(deq)
        if(maxVal[0] != deq[0][0]):
            deq.rotate(-idx)
        cnt += 1
        if(deq.popleft()[1] == M):
            break
    print(cnt)