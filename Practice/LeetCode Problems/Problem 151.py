# Reverse words in a string

def reverseString(s: str) -> str:
    
    new_s = " ".join(s.split(" ")[ : :-1]).strip(" ")
    
    # Remove Double Spaces
    
    str = []
    
    for i, c in enumerate(new_s):
        
        if i < len(new_s) - 1 and new_s[i] == new_s[i + 1] == " ":
            i += 1
        else:
            str.append(c)
            i += 1
    
    return "".join(str)



# Test

print(reverseString("The Cow Jumps on the Man."))
print(reverseString("Thats a cute brown fox."))
print(reverseString("Thats   a Cow  "))
