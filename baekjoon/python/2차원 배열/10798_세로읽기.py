matrix = [list(input()) for _ in range(5)]
maxLen = 0
for elem in matrix:
    if(maxLen < len(elem)): maxLen = len(elem)

ans = ''
for col in range(maxLen):
    for row in range(5):
        try:
            ans += matrix[row][col]
        except IndexError:
            continue
print(ans)