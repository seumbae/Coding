n = int(input())

i = 2
while(1 < n):
    if(n % i == 0):
        print(i)
        n //= i
    else:
        i += 1