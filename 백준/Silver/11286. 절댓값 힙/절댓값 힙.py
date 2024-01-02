import sys
import heapq
input = sys.stdin.readline

heap = []

N = int(input())

for _ in range(N):
    num = int(input())

    if num == 0:
        if len(heap) == 0:
            print(0)
        else:
            num, sign = heapq.heappop(heap)
            print(num * sign)
    else:
        if num < 0:
            num = -num
            sign = -1
        else:
            sign = 1
        heapq.heappush(heap, (num, sign))
