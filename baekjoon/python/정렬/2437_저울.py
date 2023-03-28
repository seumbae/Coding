n = int(input())
weights = sorted(list(map(int, input().split())))

minVal = 0

for weight in weights:
    if(minVal + 1 < weight): break
    minVal += weight
print(minVal+1)