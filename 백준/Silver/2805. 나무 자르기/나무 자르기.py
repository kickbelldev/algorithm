n, m = map(int, input().split())

trees = list(map(int, input().split()))

max_height = max(trees)


def get_tree_cnt(height):
    cnt = 0
    for tree in trees:
        if tree > height:
            cnt += tree - height

    return cnt


result = []


def binary_search(start, end):
    while start <= end:
        mid = (start + end) // 2
        tree_cnt = get_tree_cnt(mid)
        if tree_cnt >= m:
            start = mid + 1
            result.append(mid)
        else:
            end = mid - 1


binary_search(0, max_height)
print(max(result))
