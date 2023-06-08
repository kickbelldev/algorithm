board = []
for _ in range(9):
    row = list(map(int, input().split()))
    
    board.append(row)

max_value = 0
max_index = { 'i': 1, 'j': 1 }
    
for i in range(9):
    for j in range(9):
        if max_value < board[i][j]:
            max_value = board[i][j]
            max_index = { 'i': i + 1, 'j': j + 1 }

print(max_value)
print(max_index['i'], max_index['j'])