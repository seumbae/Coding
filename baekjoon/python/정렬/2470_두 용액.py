n = int(input())

numbers = list(map(int, input().split()))
# TODO: 이분 탐색 공부
left = 0
right = n-1

candidate = []
while(left < right):
    tmp = numbers[left] + numbers[right]
    if(candidate):
        if(abs(tmp) < abs(candidate[-1][0])):
            candidate.append((tmp, left, right))
            right -= 1
        else:
            left +=1 
            break
    else:
        candidate.append((tmp, left, right))
        right -=1 
print(candidate)
print(numbers[candidate[-1][1]], numbers[candidate[-1][2]])
