T = int(input())

for _ in range(T):
    n, *scores = map(int, input().split())
    avg = sum(scores)/n
    ans = 0
    for score in scores:
        if(score > avg): ans +=1
    print(f'{ans/n*100:0.3f}%')