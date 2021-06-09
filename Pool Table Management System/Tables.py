import datetime as dt


class Table:

    def __init__(self, number):

        self.tableNo = number
        self.inUse = False
        self.TCPH = 16     # Table Cost Per Hour

    def getTableNo(self):

        return self.tableNo

    def getInUse(self):

        return self.inUse

    def setStartTime(self):

        time = dt.datetime.now().strftime('%Y/%m/%d - %I:%M')
        print(time)

        return time

    def calcCosts(self, starttime, endtime):

        return


table = Table(2)

table.setStartTime()
