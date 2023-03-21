n = int(input())

arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

arr.sort(key=lambda x: x[0])
xMin, xMax  = arr[0][0], arr[len(arr)-1][0]

arr.sort(key= lambda x :x[1])
yMin, yMax = arr[0][1], arr[len(arr)-1][1]

print((xMax - xMin) * (yMax - yMin))