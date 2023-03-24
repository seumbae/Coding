import sys

T = int(input())

for _ in range(T):
    cmd = sys.stdin.readline().rstrip()
    num = int(sys.stdin.readline().rstrip())
    arr = sys.stdin.readline().rstrip()[1:-1].split(',')
    if(arr[0] == ''): arr.pop()
    
    isReverse = False
    flag = True
    for v in cmd:
        if(v == 'R'):
            isReverse = not isReverse
        else:
            if(len(arr) == 0):
                flag = False;break
            if(isReverse):
                arr.pop()
            else:
                arr.pop(0)
    sys.stdout.write('[{}]\n'.format(','.join(reversed(arr)if isReverse else arr)) if flag else 'error\n')




