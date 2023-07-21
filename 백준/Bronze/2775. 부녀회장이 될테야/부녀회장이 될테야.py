li = [[0] * 15 for i in range(15)]
li[0] = [j for j in range(15)]

for i in range(1, 15):
    for j in range(1, 15):
        li[i][j] = sum(li[i - 1][1 : j + 1])

for _ in range(int(input())):
    k = int(input())
    n = int(input())

    print(li[k][n])
