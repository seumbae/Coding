from sys import stdin

n = int(stdin.readline().rstrip())
words = [stdin.readline().rstrip() for _ in range(n)]
weights = {}

for word in words:
    for i, alpha in enumerate(word):
        weight = 10 ** (len(word)-i-1)
        if(weights.get(alpha) != None):
            weights[alpha] += weight
        else:
            weights[alpha] = weight

sortedVal = sorted(weights.values(), key=lambda x: -x)

ans = 0
num = 9
for val in sortedVal:
    ans += val*num
    num -= 1
print(ans)