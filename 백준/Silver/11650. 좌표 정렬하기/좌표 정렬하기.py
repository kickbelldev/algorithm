import sys

N = int(input())

li = []

for _ in range(N):
    coordinate = list(map(int, sys.stdin.readline().split()))

    li.append(coordinate)

li.sort(key=lambda x: (x[0], x[1]))

for [x, y] in li:
    print(x, y, sep=' ')