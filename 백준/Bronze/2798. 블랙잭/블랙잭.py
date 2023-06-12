N, M = map(int, input().split())

li = list(map(int, input().split()))

result = 0
cnt = 0

length = len(li)

for i in range(length):
    for j in range(i + 1, length):
        for k in range(j + 1, length):
            if li[i] + li[j] + li[k] <= M:
                result = max(li[i] + li[j] + li[k], result)

print(result)