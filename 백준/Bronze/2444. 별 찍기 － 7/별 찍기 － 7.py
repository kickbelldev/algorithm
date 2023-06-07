N = int(input())

for i in range(0, N):
    for _ in range(N - i - 1):
        print(' ', end='')
    for _ in range(i * 2 + 1):
        print('*', end='')
    print('')
for i in range(1, N):
    for _ in range(i):
        print(' ', end='')
    for _ in range((N - i - 1) * 2 + 1):
        print('*', end='')
    print('')