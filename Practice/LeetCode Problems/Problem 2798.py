# Given an array of numbers and a target, return the number of numbers in the array that are greater than the target


def metTarget(arr: list, T: int) -> int:
    
    return sum(num >= T for num in arr)


# Test Cases

print(metTarget([7, 3, 1, 2], 3)) # 2
print(metTarget([1, 3, 1, 2], 7)) # 0
print(metTarget([7, 3, 1, 2], 2)) # 3

