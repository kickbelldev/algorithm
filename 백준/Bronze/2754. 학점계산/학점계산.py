board = {'A': 4.0, 'B': 3.0, 'C': 2.0, 'D': 1.0, 'F': 0.0, '-': -0.3, '+': 0.3, '0': 0.0}
score = list(input())

if score[0] == 'F':
    print(board[score[0]])
else:
    print(board[score[0]] + board[score[1]])