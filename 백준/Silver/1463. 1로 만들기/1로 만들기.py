N = int(input())

d = [0] * (N + 1)

for i in range(N - 1, 0, -1):
    d[i] = d[i + 1] + 1
    if i * 3 <= N:
        d[i] = min(d[i], d[i * 3] + 1)
    if i * 2 <= N:
        d[i] = min(d[i], d[i * 2] + 1)

print(d[1])
