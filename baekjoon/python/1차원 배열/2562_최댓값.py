import sys
numbers = [int(sys.stdin.readline()) for _ in range(9)]
print(f'{max(numbers)}\n{numbers.index(max(numbers))+1}')