import sys
students = [False]*30
for _ in range(28):
    student = int(sys.stdin.readline().rstrip())
    students[student-1] = True
print(*(i for i,v in enumerate(students, start=1) if v == False), sep='\n')