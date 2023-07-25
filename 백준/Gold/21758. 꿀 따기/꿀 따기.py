N = int(input())

b = list(map(int, input().split()))
s = sum(b[:])

answer = 0

t = b[0]
for i in range(1, N):
    t += b[i]
    answer = max(answer, s - b[0] + s - t - b[i])

b.reverse()
t = b[0]
for i in range(1, N):
    t += b[i]
    answer = max(answer, s - b[0] + s - t - b[i])

for i in range(1, N):
    answer = max(answer, s - b[0] - b[-1] + b[i])

print(answer)
