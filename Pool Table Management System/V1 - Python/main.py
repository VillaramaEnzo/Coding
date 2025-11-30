import Tables as t
import tkinter as tk
from tkinter import ttk
import ButtonGrid as BG


class GUI():

    def __init__(self, parent):

        self.grid = BG.ButtonGrid(parent, 2, 3)


if __name__ == "__main__":
    app = tk.Tk()
    app.title("Pool Management System")
    app.geometry("600x400")
    b = GUI(app)
    app.mainloop()
