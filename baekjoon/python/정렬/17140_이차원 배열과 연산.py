from collections import Counter

def conversion(arr, dir):
    newArr, maxLen = [], 0
    
    for row in arr:
        counter = sorted(Counter(row).most_common(), key=lambda x :(x[1], x[0]))
        tmp = []
        for (val, cnt) in counter:
            if(val == 0 ): continue
            tmp.append(val)
            tmp.append(cnt)
        newArr.append(tmp)
        maxLen = max(maxLen, len(tmp))
    
    for row in newArr:
        row += [0] * (maxLen - len(row))
        if(100 < len(row)): row = row[:100]
    
    return newArr if dir == 'R' else list(zip(*newArr))

r, c, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(3)]

ans = 0

while(True):
    if(100 < ans): ans = -1; break
    
    rowSize = len(arr)
    colSize = len(arr[0])
    if(0 < r <= rowSize and 0 < c <= colSize and arr[r-1][c-1] == k): break

    if(colSize <= rowSize):
        arr = conversion(arr, 'R')
    else:
        arr = conversion(list(zip(*arr)), 'C')
    ans += 1
print(ans)
