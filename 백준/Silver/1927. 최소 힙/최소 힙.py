import sys
import heapq
input = sys.stdin.readline

min_heap = []

N = int(input())

for _ in range(N):
    num = int(input())

    if num == 0:
        if len(min_heap) == 0:
            print(0)
        else:
            print(heapq.heappop(min_heap))
    else:
        heapq.heappush(min_heap, num)
