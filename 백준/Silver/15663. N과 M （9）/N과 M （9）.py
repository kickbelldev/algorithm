N, M = map(int, input().split())
nums = list(map(int, input().split()))

nums.sort()

visit = [False] * N

s = set()

li = []


def back(cnt):
    if cnt == M:
        print(" ".join(map(str, li)))
        return
    memory = 0
    for i in range(0, N):
        if visit[i] is False and memory != nums[i]:
            visit[i] = True
            li.append(nums[i])
            memory = nums[i]
            back(cnt + 1)
            visit[i] = False
            li.pop()


back(0)
