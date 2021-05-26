from time import sleep
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from getpass import getpass


class InstaBot:

    def __init__(self, username, pw):

        chromeOptions = Options()
        # preferences = {"detach": True, "excludeSwitches": ["enable-automation"]}
        chromeOptions.add_argument("--start-maximized")
        chromeOptions.add_experimental_option("detach", True)
        chromeOptions.add_experimental_option("excludeSwitches", ["enable-automation"])

        self.driver = webdriver.Chrome(options=chromeOptions)
        self.driver.get("https://www.instagram.com/")

        self.username = username
        self.date = datetime.today().strftime("%d-%m-%Y")

        sleep(1)

        # Dont need this here as we are already directed to the log in page
        # self.driver.find_element_by_xpath("//a[contains(text(), 'Log in')]").click()

        # Find Username field
        self.driver.find_element_by_xpath("//input[@name=\"username\"]")\
            .send_keys(username)

        # Find Password field
        self.driver.find_element_by_xpath("//input[@name=\"password\"]")\
            .send_keys(pw)

        # Logs user in
        self.driver.find_element_by_xpath("//button[@type='submit']").click()

        sleep(5)

        self.driver.find_element_by_xpath("//button[contains(text(), 'Not Now')]").click()
        self.driver.find_element_by_xpath("//button[contains(text(), 'Not Now')]").click()

        sleep(2)

    def get_followers(self):
        self.driver.find_element_by_xpath("//a[contains(@href,'/{}')]".format(self.username))\
            .click()
        sleep(2)

        self.driver.find_element_by_xpath("//a[contains(@href,'/followers')]")\
            .click()
        followers = self._get_names()

        followers.sort()

        filename = "followers - " + self.username + ".txt"

        with open(filename, 'w') as f:

            f.write("List Length: %s \n\n" % len(followers))

            for item in followers:
                f.write("%s \n" % item)

        f.close()

        self.driver.quit()

    def get_following(self):
        self.driver.find_element_by_xpath("//a[contains(@href,'/{}')]".format(self.username))\
            .click()
        sleep(2)

        self.driver.find_element_by_xpath("//a[contains(@href,'/following')]")\
            .click()
        following = self._get_names()

        following.sort()

        filename = self.date + " - following - " + self.username + ".txt"

        with open(filename, 'w') as f:

            f.write("List Length: %s \n\n" % len(following))

            for item in following:
                f.write("%s \n" % item)

        f.close()

        self.driver.quit()

    def get_unfollowers(self):
        self.driver.find_element_by_xpath("//a[contains(@href,'/{}')]".format(self.username))\
            .click()
        sleep(2)

        self.driver.find_element_by_xpath("//a[contains(@href,'/following')]")\
            .click()
        following = self._get_names()

        self.driver.find_element_by_xpath("//a[contains(@href,'/followers')]")\
            .click()
        followers = self._get_names()

        not_following_back = [user for user in following if user not in followers]

        not_following_back.sort()

        # Sends names to text file
        filename = "notFollowing - " + self.username + ".txt"

        with open(filename, 'w') as f:

            f.write("List Length: %s \n\n" % len(not_following_back))

            for item in not_following_back:
                f.write("%s \n" % item)

        f.close()

        self.driver.quit()

    def _get_names(self):
        # sleep(2)
        # sugs = self.driver.find_element_by_xpath('//h4[contains(text(), Suggestions)]')
        # self.driver.execute_script('arguments[0].scrollIntoView()', sugs)

        sleep(2)
        scroll_box = self.driver.find_element_by_xpath("/html/body/div[5]/div/div/div[2]")

        last_ht, ht = 0, 1
        while last_ht != ht:
            last_ht = ht
            sleep(1)
            ht = self.driver.execute_script("""
                arguments[0].scrollTo(0, arguments[0].scrollHeight);
                return arguments[0].scrollHeight;
                """, scroll_box)

        links = scroll_box.find_elements_by_tag_name('a')
        names = [name.text for name in links if name.text != '']

        # close button
        self.driver.find_element_by_xpath("/html/body/div[5]/div/div/div[1]/div/div[2]/button")\
            .click()
        return names


username = input("Please enter username: ")
password = getpass(prompt='Please enter password: ', stream=None)


IBot = InstaBot(username, password)
# IBot.get_followers()
IBot.get_following()
# IBot.get_unfollowers()
