# Find the Kth largest element in an array

import heapq

def kthLargest(arr : list[int], k : int) -> int:
    
    heap = []
    
    for num in arr:
        heapq.heappush(heap, num)
        
        if len(heap) > k:
            heapq.heappop(heap)
    
    return heap[0]

# Test
print(kthLargest([3, 2, 1, 5, 6, 4], 2)) #5 
print(kthLargest([3, 2, 1, 5, 6, 4], 3)) #4 
print(kthLargest([3, 2, 14, 5, 96, 4], 2)) #14 

