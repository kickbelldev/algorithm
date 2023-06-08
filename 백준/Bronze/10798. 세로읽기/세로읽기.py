board = []

max_len = 0

for _ in range(5):
    row = list(input())
    max_len = max(len(row), max_len)

    board.append(row)

for j in range(max_len):
    for i in range(5):
        try:
            print(board[i][j], end='')
        except:
            pass
