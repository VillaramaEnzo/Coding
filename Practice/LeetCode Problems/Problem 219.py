def containsNearbyDuplicates(nums: list[int], k: int):
    
    num_to_i = {}
    n = len(nums)
    for i in range(n):
        if nums[i] in num_to_i:
            if abs(num_to_i[nums[i]] - i) <= k:
                return True
        num_to_i[nums[i]] = i
    
    return False


print(containsNearbyDuplicates([1,2,3,1], 3))
print(containsNearbyDuplicates([1,0,1,1], 1))
print(containsNearbyDuplicates([1,2,3,1,2,3], 2))

      
        