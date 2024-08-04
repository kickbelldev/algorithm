import sys
input = sys.stdin.readline

n, m = map(int, input().split())

numbers = list(map(int, input().split()))

acc = 0
sums = [acc]


for num in numbers:
    acc += num
    sums.append(acc)


for _ in range(m):
    i, j = map(int, input().split())
    print(sums[j] - sums[i - 1])
