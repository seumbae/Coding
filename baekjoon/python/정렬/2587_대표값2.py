numbers = [int(input()) for _ in range(5)]
numbers.sort()
print(f'{sum(numbers)//5}\n{numbers[2]}')