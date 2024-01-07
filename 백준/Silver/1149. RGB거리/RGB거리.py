d = [[0, 0, 0] for _ in range(1001)]
n = int(input())

li = []

for i in range(n):
    li.append(list(map(int, input().split())))

current_color = 'r'
d[0] = li[0]

for i in range(1, n):
    for j in range(3):
        m = 1000 * 1001
        for k in range(3):
            if j == k:
                continue
            if d[i - 1][k] < m:
                m = d[i - 1][k]
        d[i][j] = m + li[i][j]

print(min(d[n - 1]))
