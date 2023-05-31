T = int(input())

coins = [25, 10, 5, 1]

for i in range(T):
    change = int(input())

    cnt = [0, 0, 0, 0]
    for j in range(4):
        cnt[j] = change // coins[j]
        change = change % coins[j]

    print(" ".join(map(str, cnt)))
