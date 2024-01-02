n = int(input())

li = []

for i in range(n):
    x, y = map(int, input().split())

    li.append((x, y, 0))

for i in range(n):
    for j in range(n):
        if i == j:
            continue
        if li[i][0] < li[j][0] and li[i][1] < li[j][1]:
            li[i] = (li[i][0], li[i][1], li[i][2] + 1)

for item in li:
    print(item[2] + 1, end=' ')
