import webbrowser as wb
import time
import random


sites = [
        "https://google.com", "https://youtube.com", "https://github.com",
        "https://gist.github.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a",
        "https://www.facebook.com", "https://www.instagram.com",
        "https://twitter.com", "https://discord.com", "https://www.auckland.ac.nz/en.html",
        "https://sso.canvaslms.com", "https://www.netflix.com", "https://www.tiktok.com/en",
        "https://www.snapchat.com"
        ]


while True:

    num = random.randint(0, len(sites))

    sleepTime = random.randint(0, 30)

    wb.open_new(sites[num])

    time.sleep(sleepTime)
