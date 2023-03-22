n = int(input())

ans = -1
for i in range(0, n//5+1):
    for j in range(0, n//3+1):
        if((5*i + 3*j) == n):
            ans = i+j if ans == -1 else min(ans, i+j)
print(ans)