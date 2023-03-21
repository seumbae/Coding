pos = sorted([list(map(int, input().split())) for _ in range(3)])
ans = []
if(pos[0][0] == pos[1][0]):
    ans.append(pos[2][0])
elif(pos[1][0] == pos[2][0]):
    ans.append(pos[0][0])

if(pos[0][1] == pos[1][1]):
    ans.append(pos[2][1])
elif(pos[1][1] == pos[2][1]):
    ans.append(pos[0][1])
else:
    ans.append(pos[1][1])

print(' '.join(map(str, ans)))