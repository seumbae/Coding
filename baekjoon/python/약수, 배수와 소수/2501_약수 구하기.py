n, k = map(int, input().split())
factors = []
for factor in range(1, n+1):
    if(n % factor == 0): factors.append(factor)
print(factors[k-1] if k <= len(factors) else 0)