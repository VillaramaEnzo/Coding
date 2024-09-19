''' Simple Calculator'''
""" My Task Is To create a Simple calculator for my client
My Calulator must include
- 4 funtions
    - Plus - Minus
    - Multiply - Divide
- It must be created using Tkinter
- Must have a normal 9key  number numpad
- I am going to include a Clear, Delete and Decimal Functions
*** Psuedocode ***
Import tkinter
Programme Buttons
Grid Buttons
Program Button Functions
Add Key Binding
Debugging
"""
from tkinter import *
class Functions:
    '''
    - This Class defines and creates the functions of the buttons
    - Functions within this class are called up by the Gui Class
    '''
    def Zero(self,Func):
        self.entry.configure(state = "normal")
        n = 0
        self.entry.insert(END,n)
        self.entry.configure(state = "disabled")

    def Functions(self,i):
        self.entry.configure(state = "normal")
        self.entry.insert(END,i)
        self.entry.configure(state = "disabled")

    def Operations(self,f):
        self.entry.configure(state = "normal")
        self.entry.insert(END,f)
        self.entry.configure(state = "disabled")

    def Equal(self,Func):
        self.entry.configure(state = "normal")
        try:      #Puts in all valid answers into the entry Field
            if '**' in self.entry.get() or '++' in self.entry.get() or '//' in self.entry.get():
                self.entry.delete(END,n)
                self.entry.insert("ERROR",END)

            answer = eval(self.entry.get())
            self.entry.delete(0,END)
            self.entry.insert(END,answer)
            self.entry.configure(state = "disabled")
        except:   #Produces and Error if the Input is not Valid
            self.entry.delete(0,END)
            self.entry.insert(END, "ERROR")
            self.entry.configure(state = "disabled")

    def Decimal(self,Func):
        self.entry.configure(state = "normal")
        n = "."
        self.entry.insert(END,n) # Allows the User to Create a Float value
        self.entry.configure(state = "disabled")

    def C(self,Func):
        self.entry.configure(state = "normal")
        self.entry.delete(0,END) # Clears the entry Field
        self.entry.configure(state = "disabled")

    def Backspace(self,Func):
        self.entry.configure(state = "normal")
        n = len(self.entry.get())  # Allows the User to fix an Error they may have Made
        self.entry.delete(n-1)
        self.entry.configure(state = "disabled")


    def Help(self,Func):
        self.new = Toplevel()
        self.new.title("Help For Those Who Need It")
        self.new.focus()
        self.new.text = Label(self.new, text =

"""This Is a Calculator.
-------------------------------------------------------------------------------------------------------------------
This Calculator only serves the purpose to Calculate 4 functions
This Calculator can only handle up to a 14 digit long equation/number (so far)
This dynamic function of allowing a longer digit number still needs work
But...
You can input any number into this Calculator
=> Integer or Float (Decimal)
=> Negative or Positive
-------------------------------------------------------------------------------------------------------------------
Press (delete) or (backspace) to delete one number from entry
Press (h) to open help
Press (c) to clear entry
press (q) to quit programme
To use Numpad make sure Numlock is On
Both Numpad and Numbers at the top of your keyboard,
are bound to numbers on the calculator
-------------------------------------------------------------------------------------------------------------------
This Calculator has:
=> A1ddition (+) to "Add" Numbers
=> Subtraction (-) to "Subtract" Numbers
=> Multiplication (*) to "Multiply" Numbers
=> Division (/) to "Divide" Numbers
-------------------------------------------------------------------------------------------------------------------
If you wish to quit press the red cross in the top
right corner of the calculator or the quit
button on the right side of the calculator
-------------------------------------------------------------------------------------------------------------------
"""

        ,font = "Exo 10", fg = "dark orange", bg = "grey24")
        self.new.text.grid(row = 0, column = 0, sticky  = N+S+E+W)
        self.new.text2 = Label(self.new, text = "Created by Enzo Villarama",
                          font = "Exo 11", fg = "green2", bg = "grey24")
        self.new.text2.grid(row = 0, column = 0,sticky = S)
        self.new.resizable(False,False)
        self.new.Quit = Button(self.new, text = "QUIT", wraplength = 1, height = 32, relief = RAISED, fg = 'snow', bg = 'red', command = lambda: self.Quit2(Func))
        self.new.Quit.grid(row = 0, column = 1, sticky = W)
        self.new.bind('<q>',self.Quit2)

    def Quit(self,Func):
        root.destroy()

    def Quit2(self,Func):
        self.new.destroy()

    def Keybind(self,key):
        if key.char in self.numbers or key.char in self.functions or key.char == '0':
            self.entry.configure(state = "normal")
            self.entry.insert(END,key.char)
            self.entry.configure(state = "disabled")


class GridGui(Functions):
    '''
    - This class creates the Buttons and creates the Gui of the Calulator
    - It calls the "Functions" class
    - This class only defines and creates the Buttons of The Calculator
    - It also states the binds of the buttons
    - Each button calls on a indidual function in the Function Class
    '''
    def __init__(self, parent):
        self.entry = Entry(parent, width = 8, font = "Exo 24",
            disabledforeground = 'dark turquoise',
            disabledbackground = 'grey24') # This Creates the Entry Field, In which all inputs will show up
        self.entry.grid(row = 0, column = 0, columnspan = 5, sticky = E+W+S+N)
        self.entry.configure(state = "disabled")

        def NumLambda(x):
            return lambda: self.Functions(x)

        self.numbers = "789456123"
        i = 0
        bttn = []
        for Row in range (2,5):
            for Column in range (0,3):
                bttn.append(Button(parent, text = self.numbers[i],
                                   height = 4, width = 8,
                                   bg = "light slate grey", fg = "lavender",
                                   relief = RAISED,
                                   command = NumLambda(self.numbers[i])))
                bttn[i].grid(row = Row, column = Column, sticky = E+W+S+N)
                i += 1



        Equals = Button(parent, text = "=", relief = RAISED,
                    width = 8, height = 4, fg = "snow", bg = "dark turquoise",
                    command = lambda:self.Equal(Func)) #Equals/Execute Funtion
        Equals.grid(row = 3, column = 3, rowspan = 2, sticky = E+W+S+N)

        Clear = Button(parent, text = "C",
                    relief = RAISED, width = 8, height = 4,
                    bg = "dark turquoise", fg = "lavender",
                    command = lambda:self.C(Func)) #Function To clear Inputs/Backspace
        Clear.grid(row = 2, column = 3, sticky = E+W+S+N)

        Num_0 = Button(parent, text = "0", relief = RAISED,
                    width = 8, height = 1, bg = "light slate grey", fg = "lavender",
                    command = lambda: self.Zero(Func)) #Number 0
        Num_0.grid(row = 5, column = 0,columnspan = 4, sticky = E+W+S+N)


        self.functionframe = Frame(parent, width = 4, height = 2)  #Separate Frame
        self.functionframe.grid(row = 1, column = 0, sticky = N+S+E+W, columnspan = 4)

        Quit = Button(parent, text = "QUIT",
                          wraplength = 1, height = 10, width = 1, relief = RAISED,
                          bg = "purple2", fg = "snow",
                          command = lambda: self.Quit(Func))
        Quit.grid(row = 1, column = 4, rowspan = 5, sticky = E+W+S+N)
        def FuncLambda(x):
            return lambda: self.Operations(x)

        self.functions = "+-*/."
        f = 0
        Func = []
        for R in range (0,1):
            for C in range (0,5):
                Func.append(Button(self.functionframe, text = self.functions[f],
                                   height = 2, width = 4,
                                   bg = "dim grey", fg = "lavender",
                                   relief = RAISED, command = FuncLambda(self.functions[f])))
                Func[f].grid(row = R, column = C, sticky = E+W+S+N)
                f += 1


        Backspace = Button(self.functionframe, text = "DEL",
                    relief = RAISED, width = 4, height = 2, bg = "dim grey", fg = "lavender",
                    command = lambda:self.Backspace(Func)) #Function To Go backspace 1 Input
        Backspace.grid(row = 0, column = 5, sticky = N)

        Help = Button(self.functionframe, text = "HELP",
                      relief = RAISED, width = 4, height = 2, bg = "dim grey", fg = "orange",
                      command = lambda:self.Help(Func))
        Help.grid(row = 0, column = 6, sticky = N)

        parent.bind('<BackSpace>',self.Backspace)
        parent.bind('<Delete>',self.Backspace)
        parent.bind('<Return>',self.Equal)
        parent.bind('<c>',self.C)
        parent.bind('<h>', self.Help)
        parent.bind('<Key>', self.Keybind)
        parent.bind('<=>',self.Equal)
        parent.bind('<q>',self.Quit)


if __name__=="__main__":
    root = Tk()
    root.resizable(False,False)
    root.title("New Calculator")
    buttons = GridGui(root)
    root.mainloop()
