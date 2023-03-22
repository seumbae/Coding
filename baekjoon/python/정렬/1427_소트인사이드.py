numbers = sorted(map(int, list(input())), key=lambda x : -x)
print(''.join(map(str, numbers)))