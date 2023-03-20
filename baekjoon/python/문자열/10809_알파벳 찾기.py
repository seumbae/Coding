str = list(input())
pos = [-1]*26

for v in str:
    pos[ord(v)-97] = str.index(v)
print(*pos)