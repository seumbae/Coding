# Case 1
# from collections import Counter
# N = int(input())
# count = Counter(map(int, input().split()))
# toFind = int(input())
# print(count[toFind])

from sys import stdin, stdout
N = int(stdin.readline())
numbers = list(map(int, stdin.readline().split()))
toFind = int(stdin.readline())
stdout.write(str(numbers.count(toFind)))