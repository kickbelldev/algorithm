T = int(input())

for _ in range(T):
    H, W, N = map(int, input().split())
    floor = N % H
    N //= H
    if floor == 0:
        floor = H
        N -= 1
    print(f"{floor}{str(N + 1).zfill(2)}")