from sys import stdin

n = int(stdin.readline().rstrip())
k = int(stdin.readline().rstrip())
sensors = sorted(list(map(int, stdin.readline().rstrip().split())))

diff = sorted([sensors[i+1] - sensors[i] for i in range(0, n-1)])

print(sum(diff[:n-k]))