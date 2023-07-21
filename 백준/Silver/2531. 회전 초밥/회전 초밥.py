import sys

N, d, k, c = map(int, input().split())

li = []

for i in range(N):
    li.append(int(sys.stdin.readline()))
li = li * 2
eat = 0

for i in range(N + k):
    temp = li[i : i + k]

    s = set(temp)

    s.add(c)

    eat = max(eat, len(s))

print(eat)
