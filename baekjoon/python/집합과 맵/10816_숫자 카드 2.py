n = int(input())
cards = {}
for v in map(int, input().split()):
    if cards.get(v) :
        cards[v] += 1
    else:
        cards[v] = 1

m = int(input())

print(' '.join(str(cards[v]) if cards.get(v) else '0' for v in map(int, input().split())))