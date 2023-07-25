N = int(input())

li = [0]

for _ in range(N):
    li.append(int(input()))

dp = [0] * (N + 1)
dp[1] = li[1]

for i in range(2, N + 1):
    dp[i] = max(dp[i - 3] + li[i - 1] + li[i], dp[i - 2] + li[i])

print(dp[N])
