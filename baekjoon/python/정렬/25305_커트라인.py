N, k = map(int, input().split())
numbers = list(map(int, input().split()))
numbers.sort(key=lambda x: -x)
print(numbers[k-1])