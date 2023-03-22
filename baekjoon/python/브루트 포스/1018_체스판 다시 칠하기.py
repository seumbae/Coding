def diff(str1, str2):
    ret = 0
    for i in range(64):
        if(str1[i] != str2[i]): ret += 1
    
    return ret

N , M = map(int, input().split())
chess = [input() for _ in range(N)]

choice = ['WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW', 'BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB']

ans = 64
cnt =0
for i in range(0,N-7):
    for j in range(0, M-7):
        board = ''
        cnt +=1
        for k in range(8):
            board += chess[i+k][j:j+8:]
        ans = min(ans, min(diff(board, choice[0]), diff(board, choice[1])))
print(ans)
