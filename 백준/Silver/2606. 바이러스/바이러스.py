import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

li = [[] for _ in range(n)]

for _ in range(m):
    s, e = map(int, input().split())
    li[s - 1].append(e - 1)
    li[e - 1].append(s - 1)

visit = [False] * n
queue = [0]

answer = -1

while queue:
    curr = queue.pop(0)
    
    if visit[curr]:
        continue
    
    visit[curr] = True
    answer += 1

    for next in li[curr]:
        queue.append(next)

print(answer)
