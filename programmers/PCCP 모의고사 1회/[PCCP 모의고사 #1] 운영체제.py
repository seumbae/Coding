from heapq import heappush, heappop

def solution(program):
    ans = [0]*11
    heap = []
    currentTime = 0

    #que - [점수, 호출 시간, 실행 시간]
    program.sort(key=lambda x: x[1])
    
    while len(program) or len(heap):
        while len(program) and program[0][1] <= currentTime:
            heappush(heap, program.pop(0))
        
        if len(heap) == 0:
            currentTime += 1
        else:
            job = heappop(heap)
            ans[job[0]] += (currentTime - job[1])
            currentTime += job[2]
    
    ans[0] = currentTime
    return ans
        
    