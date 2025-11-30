from playwright.sync_api import Playwright, sync_playwright, expect
import time
from getpass import getpass

def run(playwright: Playwright, login: list[str]) -> None:
    
    username, password = login[0].lower(), login[1]
    
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    
    page.goto("https://www.instagram.com/")
    
    page.wait_for_load_state("networkidle")
    
    page.get_by_label("Phone number, username or").click()
    page.get_by_label("Phone number, username or").fill(username)
    page.get_by_label("Phone number, username or").press("Tab")
    page.get_by_label("Password").fill(password)
    
    page.get_by_role("button", name = "Log in", exact = True).click()
    
    # By pass pop-ups
    page.get_by_role("button", name = "Not now").click()
    page.get_by_role("button", name = "Not Now").click()
    
    page.get_by_role("link", name = username, exact = True).click()
    
    page.wait_for_load_state("networkidle")
    
    # Close Automation
    # ---------------------
    time.sleep(20)
    context.close()
    browser.close()


def main(): 
    with sync_playwright() as playwright:
    
        username = input("Please enter username: ")
        password = getpass(prompt = 'Please enter password: ', stream = None)
    
        login = [username, password]
    
        run(playwright, login)


if __name__ == "__main__":
    
    main()
