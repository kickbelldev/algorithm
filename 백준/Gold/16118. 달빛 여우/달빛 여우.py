import sys
import heapq

n, m = map(int, sys.stdin.readline().split())

edges = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, d = map(int, sys.stdin.readline().split())
    edges[a].append((b, d * 2))
    edges[b].append((a, d * 2))

def fox_dijkstra(start):
    dist = [1e13] * (n + 1)
    q = [(0, start)]

    while q:
        cost, here = heapq.heappop(q)

        if dist[here] < cost:
            continue

        for there, next_cost in edges[here]:
            if next_cost + cost < dist[there]:
                dist[there] = next_cost + cost
                heapq.heappush(q, (next_cost + cost, there))

    return dist

def wolf_dijkstra(start):
    dist = [[1e13] * (n + 1) for _ in range(2)]
    q = [(0, start, 1)]

    while q:
        cost, here, run = heapq.heappop(q)

        if dist[run][here] < cost:
            continue

        if run:
            for there, next_cost in edges[here]:
                next_cost >>= 1
                if next_cost + cost < dist[run ^ 1][there]:
                    dist[run ^ 1][there] = next_cost + cost
                    heapq.heappush(q, (next_cost + cost, there, run ^ 1))    
        else:
            for there, next_cost in edges[here]:
                next_cost <<= 1
                if next_cost + cost < dist[run ^ 1][there]:
                    dist[run ^ 1][there] = next_cost + cost
                    heapq.heappush(q, (next_cost + cost, there, run ^ 1))    


    return dist

fox_dist = fox_dijkstra(1)
wolf_dist = wolf_dijkstra(1)

answer = 0

for i in range(2, n + 1):
    if fox_dist[i] < min(wolf_dist[0][i], wolf_dist[1][i]):
        answer += 1

print(answer)
