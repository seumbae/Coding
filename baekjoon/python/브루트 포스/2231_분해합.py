def getSum(num):
    sum = 0
    while(num):
        sum += num%10
        num //= 10
    return sum

n = int(input())

ans = 0
for i in range(n//2, n):
    if((i+getSum(i)) == n):
        ans = i
        break
print(ans) 