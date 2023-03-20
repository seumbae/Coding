T = int(input())
for _ in range(T):
    r, str = input().split()
    ans  = ''
    for i in str:
        ans += i*int(r)
    print(ans)