def solve(board):

    find = find_empty(board)

    if not find:

        return True

    else:

        row, col = find

    for i in range(1, 10):

        if is_valid(board, i, (row, col)):

            board[row][col] = i

            if solve(board):

                return True

            board[row][col] = 0

    return False


def is_valid(board, num, pos):

    # Check Row

    for i in range(len(board[0])):

        if board[pos[0]][i] == num and pos[1] != i:

            return False

    # Check Column

    for i in range(len(board[0])):

        if board[i][pos[1]] == num and pos[0] != i:

            return False

    # Check Box

    boxX = pos[1] // 3
    boxY = pos[0] // 3

    for i in range(boxY * 3, boxY * 3 + 3):

        for j in range(boxX * 3, boxX * 3 + 3):

            if board[i][j] == num and (i, j) != pos:

                return False

    return True


def find_empty(board):

    for i in range(len(board)):

        for j in range(len(board[i])):

            if board[i][j] == 0:

                return (i, j)   # Row, Column

    return None


def print_board(board):

    for i in range(len(board)):

        if i % 3 == 0 and i != 0:
            print("- - - - - - - - - - -")

        for j in range(len(board[0])):

            if j % 3 == 0 and j != 0:

                print("| ", end='')

            if j == 8:

                print(board[i][j])

            else:

                print(str(board[i][j]) + " ", end='')
