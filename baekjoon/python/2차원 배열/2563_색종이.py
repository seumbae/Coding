t = int(input())
arr = [[0]*100 for _ in range(100)]

for _ in range(t):
    x, y = map(int, input().split())
    for i in range(10):
        for j in range(10):
            arr[x+i][y+j] = 1

ans = 0
for elem in arr:
    ans += sum(elem)
print(ans)