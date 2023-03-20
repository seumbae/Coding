pieces = map(int, input().split())
ans = [1, 1, 2, 2, 2, 8]
for i, piece in enumerate(pieces):
    ans[i] -= piece
print(*ans)