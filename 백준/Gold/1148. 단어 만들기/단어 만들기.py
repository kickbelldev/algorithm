import sys

input = sys.stdin.readline

dictionary = []


def get_dict(word):
    word_dict = dict()

    for alp in word:
        if not alp in word_dict:
            word_dict[alp] = 0
        word_dict[alp] += 1

    return word_dict


while True:
    word = input()[:-1]

    if word == "-":
        break

    dictionary.append(get_dict(word))

while True:
    puzzle = input()[:-1]

    if puzzle == "#":
        break

    board = sorted(list(puzzle))

    board_dict = get_dict(puzzle)

    board_set = set(board)

    ans_list = []
    for item in board_set:
        ans_cnt = 0
        for word in dictionary:

            if not item in word:
                continue

            is_completed = True
            for alp in word:
                if not alp in board_dict:
                    is_completed = False
                    break
                if word[alp] > board_dict[alp]:
                    is_completed = False
                    break

            if is_completed:
                ans_cnt += 1

        ans_list.append((item, ans_cnt))

    min_cnt, max_cnt = 1e9, 0
    min_words, max_words = [], []

    for item, ans_cnt in ans_list:
        if ans_cnt < min_cnt:
            min_words = [item]
            min_cnt = ans_cnt
        elif ans_cnt == min_cnt:
            min_words.append(item)

        if ans_cnt > max_cnt:
            max_words = [item]
            max_cnt = ans_cnt
        elif ans_cnt == max_cnt:
            max_words.append(item)

    print("".join(sorted(min_words)), min_cnt, "".join(sorted(max_words)), max_cnt)
