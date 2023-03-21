def getFactors(num):
    factors = []
    for factor in range(1, num):
        if(num % factor == 0): factors.append(factor)
    return factors

def isPerfectNumber(factors, num):
    return sum(factors) == num 

while(True):
    num = int(input())
    if(num == -1): break
    factors = getFactors(num)
    if(isPerfectNumber(factors, num)):
        print(f"{num} = {' + '.join(map(str, factors))}")
    else:
        print(f'{num} is NOT perfect.')