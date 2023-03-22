import sys
from collections import Counter

n = int(input())
numbers = sorted([int(sys.stdin.readline()) for _ in range(n)])

mean = round(sum(numbers)/n)
middle = numbers[n//2]
mode = Counter(numbers).most_common()
modeAns = 0
if(len(mode) >1):
    if(mode[0][1] != mode[1][1]):
        modeAns = mode[0][0]
    else:
        modeAns = mode[1][0]
else:
    modeAns = mode[0][0]
diff = numbers[n-1] - numbers[0]
print(f'{mean}\n{middle}\n{modeAns}\n{diff}')

