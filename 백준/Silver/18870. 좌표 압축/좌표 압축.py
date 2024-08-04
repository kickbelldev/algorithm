import sys

input = sys.stdin.readline

n = int(input())

x = list(map(int, input().split()))

arr = [(x[i], i) for i in range(n)]

sorted = sorted(arr, key=lambda x: x[0])

answer = [0] * n
max = sorted[0][0]
cnt = 0

for val, idx in sorted:
    if val > max:
        max = val
        cnt += 1
    answer[idx] = cnt

print(" ".join(map(str, answer)))
