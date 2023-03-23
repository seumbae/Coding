import sys
n, m = map(int, sys.stdin.readline().split())
poketmons =[sys.stdin.readline().rstrip() for _ in range(n)]
dict = {}
for i, v in enumerate(poketmons):
    dict[v] = i+1
problems = [sys.stdin.readline().rstrip() for _ in range(m)]

for problem in problems:
    if problem.isalpha():
        print(dict.get(problem))
    else:
        print(poketmons[int(problem)-1])