import random
import Solver


def generate(grid, q):

    # generating random values for the grid
    for i in range(q):
        row, col = random.randrange(9), random.randrange(9)
        pos = (row, col)
        num = random.randrange(1, 10)

        # Re-using function to check if grid is a valid grid
        # Same function is used to check if entry is valid
        while not Solver.is_valid(grid, num, pos) or grid[row][col] != 0:

            row = random.randrange(9)
            col = random.randrange(9)
            num = random.randrange(1, 10)

        grid[row][col] = num

    return grid


def main():

    print("Level of Difficulty")
    print("     1. Beginner")
    print("     2. Intermediate")
    print("     3. Advanced")
    print()
    print("Enter the level of difficulty as per your choice:  ", end="")
    level = int(input())

    if level == 1:
        q = 35

    elif level == 2:
        q = 20

    else:
        q = 8

    board = generate([[0 for x in range(9)] for y in range(9)], q)

    for i in board:

        print(i)


main()
