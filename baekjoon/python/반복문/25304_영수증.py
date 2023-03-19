total, n = int(input()), int(input())
sum = 0
for _ in range(n):
    a, b = map(int, input().split())
    sum += a*b
print('Yes' if sum == total else 'No')