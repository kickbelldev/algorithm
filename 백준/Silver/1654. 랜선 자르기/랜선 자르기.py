K, N = map(int, input().split())

li = []

for _ in range(K):
    li.append(int(input()))

li.sort()

start = 1
end = li[-1]
while start <= end:
    mid = (start + end) // 2
    cnt = 0
    for sun in li:
        cnt += sun // mid
    if cnt >= N:
        start = mid + 1
    else:
        end = mid - 1

print(end)