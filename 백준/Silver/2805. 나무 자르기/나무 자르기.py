n, m = map(int, input().split())

trees = list(map(int, input().split()))


def get_tree_cnt(height):
    cnt = 0
    for tree in trees:
        if tree > height:
            cnt += tree - height

    return cnt


ans = 0

start = 0
end = max(trees)

while start <= end:
    mid = (start + end) // 2
    tree_cnt = get_tree_cnt(mid)
    if tree_cnt >= m:
        start = mid + 1
        if ans < mid:
            ans = mid
    else:
        end = mid - 1


print(ans)
