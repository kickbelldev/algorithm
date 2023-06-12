import sys


N = int(input())

li = []

for _ in range(N):
    num = int(sys.stdin.readline())
    
    li.append(num)
    
li.sort()

for num in li:
    print(num)