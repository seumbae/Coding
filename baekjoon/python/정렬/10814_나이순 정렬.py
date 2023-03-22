import sys

n = int(input())
users = sorted([list(sys.stdin.readline().rstrip().split()) for i in range(n)], key=lambda x: int(x[0]))
for user in users:
    print(user[0], user[1])