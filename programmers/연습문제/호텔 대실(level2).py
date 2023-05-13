from heapq import heappush, heappop

def solution(book_time):
    
    for idx, [start, end] in enumerate(book_time):
        hour, minute = map(int, start.split(':'))
        book_time[idx][0] = hour*60 + minute
        hour, minute = map(int, end.split(':'))
        book_time[idx][1] = hour*60 + minute
    
    book_time.sort()

    heap = []
    
    for [start, end] in book_time:
        if(not heap): 
            heappush(heap, end)
            continue;
            
        if(heap[0]+10 <= start):
            heappop(heap)
        heappush(heap, end)
    
    return len(heap)