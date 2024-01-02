n = int(input())

li = list(map(int, input().split()))

li.sort()

time = 0
ans = 0

for i in range(n):
    time += li[i]
    ans += time

print(ans)
