def uniquePaths(m, n):
    
    ret = []
    for i in range(m):
        ret.append([0] * n)
        
    ret[0][0] = 1
    
    for i in range(m):
        for j in range(n):
            
            if i == 0 and j == 0:
                continue
            
            elif i == 0:
                ret[i][j] = ret[i][j-1]
            
            else:
                ret[i][j] = ret[i][j-1] + ret[i-1][j]
            
        return ret[-1][-1]
    

print(uniquePaths(3, 3))

