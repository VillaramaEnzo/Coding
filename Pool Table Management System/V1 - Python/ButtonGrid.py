import tkinter as tk
from tkinter import ttk


class ButtonGrid:

    def __init__(self, parent, rows, columns):

        for i in range(columns):

            parent.columnconfigure(i, weight = 1)

        for j in range(rows):

            parent.rowconfigure(i, weight = 1)

        i = 0
        bttns = []

        for R in range(0, rows):
            for C in range(0, columns):

                bttns.append(ttk.Button(parent, text = "(%s, %s)" % (R, C), background = "red"))
                bttns[i].grid(row = R, column = C, sticky = "ns")
                i += 1
