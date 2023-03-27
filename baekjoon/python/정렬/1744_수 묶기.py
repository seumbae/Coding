import sys

n = int(input())

numbers = sorted([int(sys.stdin.readline().rstrip()) for _ in range(n)])
negative = list(filter(lambda x: x<0, numbers))
zero = list(filter(lambda x: x==0, numbers))
positive = list(filter(lambda x : x>1, numbers))
ans = list(filter(lambda x: x==1, numbers))

if(len(negative) % 2 == 1):
    if(len(zero) == 0):
        ans.append(negative.pop())

for i in range(0, len(negative), 2):
    if(i+1<len(negative) and negative[i] and negative[i+1]):
        ans.append(negative[i] * negative[i+1])

if(len(positive) % 2 == 1):
    ans.append(positive.pop(0))

for i in range(0, len(positive), 2):
    if(i+1 < len(positive) and positive[i] and positive[i+1]):
        ans.append(positive[i] * positive[i+1])
print(sum(ans))