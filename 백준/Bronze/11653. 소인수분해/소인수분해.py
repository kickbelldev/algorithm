import math

N = int(input())

a = N

while N >= 2:
    for i in range(2, a + 1):
        if N % i == 0:
            print(i)
            N = N // i
            break
