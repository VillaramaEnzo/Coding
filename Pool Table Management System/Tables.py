import datetime as dt


class Table:

    def __init__(self, number):

        self.tableNo = number
        self.inUse = False
        self.TCPH = 16     # Table Cost Per Hour
        self.startTime = None
        self.endTime = None

    def getTableNo(self):

        return self.tableNo

    def getInUse(self):

        return self.inUse

    def getTableCost(self):

        return self.TCHP

    def getStartTime(self):

        return self.startTime

    def getEndTime(self):

        return self.endTime

    def setStartTime(self):

        self.startTime = dt.datetime.now().strftime('%Y/%m/%d - %I:%M')
        print("Start Time: {}".format(self.startTime))

    def setEndTime(self):

        self.endTime = dt.datetime.now().strtftime("%Y/%m/%d - %I:%M")
        print("End Time: {}".format(self.endTime))

    def calcCosts(self):

        return self.endTime - self.startTime


table = Table(2)

table.setStartTime()
