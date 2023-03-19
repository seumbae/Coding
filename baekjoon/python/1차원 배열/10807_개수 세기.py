from collections import Counter
N = int(input())
count = Counter(map(int, input().split()))
toFind = int(input())
print(count[toFind])