import sys

n = int(sys.stdin.readline())

if n == 0:
    print(0)
    sys.exit()

li = []

for i in range(n):
    a = int(sys.stdin.readline())
    li.append(a)

li.sort()

def custom_round(num):
    mod = num % 1
    num = num // 1
    if mod < 0.5:
        mod = 0
    else:
        mod = 1
    return round(num + mod)

cutting = custom_round(n * 0.15)
cut = li[cutting:n-cutting]

if len(cut) == 0:
    print(0)
    sys.exit()

mean = sum(cut) / (len(cut))

print(custom_round(mean))
