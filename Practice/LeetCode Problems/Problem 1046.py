# Convert Stone weights to negative to simulate a max heap
# Use heapq.heapify to convert array into a heap ~ Simplifies the process from doing it manually
# While theres is more than one stone in the heap, pop the largest two stones from the heap
# If stones are not equal, "smash them" and add back the result to the heap (the difference between the two)
# Repeat until theres is only 1 "stone" left in the heap
# Return the last remaining stone or 0 if the heap is empty

import heapq

def lastStoneWeight(stones: list[int]) -> int:
    
    stones = [-s for s in stones]
    heapq.heapify(stones)
    
    while len(stones) > 1:
        a = heapq.heappop(stones)
        b = heapq.heappop(stones)
        
        if a != b:
            
            heapq.heappush(stones, a - b)
    
    return -stones[0] if stones else 0

# Test
print(lastStoneWeight([2, 7, 4, 1, 8, 1])) #1
print(lastStoneWeight([3, 5, 4, 1, 2])) #1
print(lastStoneWeight([2, 2, 3, 2, 2])) #1
