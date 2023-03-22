n = int(input())
ans = [0]*n
numbers = list(map(int, input().split()))
uniq = sorted(set(numbers))

dic = {v:i for i,v in enumerate(uniq)}

for i in range(n):
    print(dic[numbers[i]], end=' ')