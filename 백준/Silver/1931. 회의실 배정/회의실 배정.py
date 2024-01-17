import sys
input = sys.stdin.readline

n = int(input())

li = []

for _ in range(n):
    li.append(tuple(map(int, input().split())))

li.sort(key=lambda x: (x[1], x[0]))

cnt = 0
end = 0
for s, e in li:
    if s >= end:
        cnt += 1
        end = e

print(cnt)