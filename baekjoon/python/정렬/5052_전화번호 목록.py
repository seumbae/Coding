from sys import stdin

T = int(input())

for _ in range(T):
    n = int(stdin.readline().rstrip())
    calls = sorted([stdin.readline().rstrip() for _ in range(n)])
    ans = True
    # 입력을 문자열로 받기 때문에 사전순으로 정렬된다
    cmp = calls[0]
    for call in calls[1:]:
        if(call.startswith(cmp)):
            ans = False
            break
        else:
            cmp = call
    print('YES' if ans else 'NO')