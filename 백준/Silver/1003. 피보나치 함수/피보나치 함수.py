zero = [0] * 41
one = [0] * 41

for i in range(41):
    if i == 0:
        zero[0] = 1
    elif i == 1:
        one[1] = 1
    else:
        zero[i] = zero[i-1] + zero[i-2]
        one[i] = one[i-1] + one[i-2]

t = int(input())

for i in range(t):
    n = int(input())

    print(zero[n], one[n])
