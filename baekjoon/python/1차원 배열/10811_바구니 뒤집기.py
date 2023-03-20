N, M = map(int, input().split())
basket = [i+1 for i in range(N)]
for _ in range(M):
    i, j = map(int, input().split())
    basket[i-1:j] = list(reversed(basket[i-1:j]))
    # basket = basket[:i-1] + list(reversed(basket[i-1: j])) + basket[j:]
print(*basket)