n = int(input())
numbers ={v:True for v in map(int, input().split())}

m = int(input())
cards = [1 if v in numbers else 0 for v in map(int, input().split())]
print(*cards)