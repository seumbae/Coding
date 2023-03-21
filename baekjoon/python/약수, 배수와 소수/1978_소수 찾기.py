def isPrime(num):
    if(num == 1): return False
    for i in range(2, num):
        if(num % i == 0): return False
    return True

n = int(input())
numbers = list(map(int, input().split()))

ans = 0
for i in range(n):
    if(isPrime(numbers[i])): ans += 1
print(ans)