h, m = map(int, input().split())
if 45 <= m:
    print(f'{h} {m-45}')
else:
    print(f'{(h-1)%24} {m+15}')