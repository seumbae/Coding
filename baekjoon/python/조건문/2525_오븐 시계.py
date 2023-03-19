h, m = map(int, input().split())
need = divmod(int(input()), 60)
print(f'{(h+need[0]+(m+need[1])//60)%24} {(m+need[1])%60}')