def isPrime(num):
    if(num == 1): return False
    for i in range(2, num):
        if(num % i == 0): return False
    return True

m, n = int(input()), int(input())

primes = []
for num in range(m, n+1):
    if(isPrime(num)): primes.append(num)
print(f'{sum(primes)}\n{primes[0]}' if 0 < len(primes) else -1)