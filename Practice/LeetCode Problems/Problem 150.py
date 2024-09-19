# Evaluate Revese Polish Notation

def evalRPN(tokens: list[str]) -> int:
    
    stk = []
    
    for t in tokens:
        if t.isdigit() or (t[0] == "-" and token[1:].isdigit()):
            stk.append(int(t))
        else:
            b, a = stk.pop(), stk.pop()
            
            if t == "+":
                stk.append(a + b)
            
            elif t == "-":
                stk.append(a - b)
            
            elif t == "*":
                stk.append(a * b)
            
            elif t == "/":
                    
                    division = a / b
                
                    if division < 0:
                        stk.append(ceil(division))
                    
                    else:
                        stk.append(int(division))
    
    return stk.pop()
            


# Test
print(evalRPN(["2", "1", "+", "3", "*"])) # 9
print(evalRPN(["4", "13", "5", "/", "+"])) # 6
