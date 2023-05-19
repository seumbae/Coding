from heapq import heappush, heappop

def solution(n, k, enemy):
    heap = []
    ans = 0
    
    for idx, val in enumerate(enemy):
        heappush(heap,-val)
        n -= val
        if k == 0 and n < 0: break
        if n < 0:
            n += -heappop(heap)
            k -=1
        ans = idx+1
    return ans