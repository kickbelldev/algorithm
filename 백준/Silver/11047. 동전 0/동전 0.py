N, K = map(int, input().split())

li = []

for _ in range(N):
    li.append(int(input()))

cnt = 0

for coin in li[::-1]:
    if K >= coin:
        cnt += K // coin
        K %= coin

print(cnt)
