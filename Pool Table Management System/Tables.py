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

    def setStartTime(self):

        self.startTime = dt.datetime.now().strftime('%Y/%m/%d - %I:%M')
        print("Start Time: {}".format(self.startTime))

    def calcCosts(self, starttime, endtime):

        return


table = Table(2)

table.setStartTime()
