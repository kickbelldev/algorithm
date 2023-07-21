N, d, k, c = map(int, input().split())

li = []

for i in range(N):
    li.append(int(input()))

eat = 0
temp = []
for i in range(N + k):
    a = i
    if a >= N:
        a -= N
    temp.append(li[a])

    if len(temp) > k:
        temp = temp[1:]

    s = set(temp)

    s.add(c)

    eat = max(eat, len(s))

print(eat)
