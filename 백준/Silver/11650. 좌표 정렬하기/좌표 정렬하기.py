N = int(input())

li = []

for _ in range(N):
    coordinate = list(map(int, input().split()))

    li.append(coordinate)

li.sort(key=lambda x: (x[0], x[1]))

for [x, y] in li:
    print(x, y, sep=' ')