alpha = [0] * 26
word = input().upper()
for v in word:
    alpha[ord(v)-65] += 1
print(chr(alpha.index(max(alpha))+65) if alpha.count(max(alpha)) == 1 else '?')