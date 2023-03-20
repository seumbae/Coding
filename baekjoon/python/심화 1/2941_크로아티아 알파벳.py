# Case 1: re(Regex)
# import re
# word = input()
# word = re.sub('c=|c-|dz=|d-|lj|nj|s=|z=','*',word)
# print(len(word))

# Case 2: replace
word = input()
sub = ['c=','c-','dz=','d-','lj','nj','s=','z=']
for v in sub:
    word = word.replace(v,'*')
print(len(word))