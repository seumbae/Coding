N, M = map(int, input().split())

matrix1 = [list(map(int,input().split())) for _ in range(N)]
matrix2 = [list(map(int,input().split())) for _ in range(N)]

for i in range(N):
    arr = []
    for j in range(M):
        arr.append(matrix1[i][j] + matrix2[i][j])
    print(*arr)
