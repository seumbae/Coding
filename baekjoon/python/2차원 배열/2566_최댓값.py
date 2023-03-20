matrix = [list(map(int, input().split())) for _ in range(9)]

ans = row = col = 0
for i, v in enumerate(matrix):
    if(ans < max(v)): 
        ans = max(v)
        row = i
        col = v.index(ans)

print(f'{ans}\n{row+1} {col+1}')
