li = [0 for _ in range(1001)]

max_h = 0
max_h_idx = 0

for _ in range(int(input())):
    L, H = map(int, input().split())

    li[L] = H
    if max_h < H:
        max_h = H
        max_h_idx = L


answer = 0

curr = 0
for i in range(max_h_idx + 1):
    curr = max(curr, li[i])
    answer += curr

curr = 0
for i in reversed(range(max_h_idx + 1, 1001)):
    curr = max(curr, li[i])
    answer += curr
print(answer)
