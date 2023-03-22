#Counting sort
import sys

n = int(sys.stdin.readline())
sortedArr = [0]*10001

for i in range(n):
    sortedArr[int(sys.stdin.readline().rstrip())] += 1

for i in range(10001):
    if(sortedArr[i]):
        for j in range(sortedArr[i]):
            sys.stdout.write(str(i)+'\n')