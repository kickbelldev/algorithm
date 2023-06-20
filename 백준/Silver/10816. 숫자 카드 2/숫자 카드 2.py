N = int(input())
N_li = list(map(int, input().split()))

M = int(input())
M_li = list(map(int, input().split()))

di = {}

for item in M_li:
    di[item] = 0

for item in N_li:
    if item in di:
        di[item] += 1

for item in M_li:
    print(di[item], end=" ")
