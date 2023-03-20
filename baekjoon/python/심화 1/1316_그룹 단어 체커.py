T = int(input())
for _ in range(T):
    word = input()
    flag = False
    for i in range(len(word)-2):
        if word[i] != word[i+1] and word[i] in word[i+2:]:
            flag = True
            break
    if(flag):
        T -= 1
print(T)