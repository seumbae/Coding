# import sys
# def calc(rem, i):
#     return rem * (10**i);

# list = [int(sys.stdin.readline().rstrip()) for _ in range(2)]

# sum = 0
# for i in range(3):
#   rem = list[1]%10;
#   sum += list[0] * calc(rem, i)
#   print(rem*list[0])
#   list[1] //= 10
# print(sum)

# List comprehension, 문자열에 index로 접근
a,b = int(input()), input()
print(*[a*int(i) for i in b[::-1]],a*int(b))