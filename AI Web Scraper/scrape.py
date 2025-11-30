import selenium.webdriver as webdriver
from selenium.webdriver.safari.service import Service
from bs4 import BeautifulSoup

def scrape_site(url):
    print("Launching Safari Browser...")

    safari_driver_path = "/usr/bin/safaridriver"
    options = webdriver.SafariOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Safari(service=Service(safari_driver_path), options=options)


    try: 
        driver.get(url)
        print("Navigating to the website...")
        print("Website Title: ", driver.title)

        html = driver.page_source

        return html
    
    except Exception as e:
        print("An error occurred: ", e)
    
    finally:
        driver.quit()
        print("Closing the browser...")


def extract_text(html):
    soup = BeautifulSoup(html, 'html.parser')
    body_content = soup.body

    if body_content:
        return str(body_content)
    
    return ""


def clean_text(text):
    soup = BeautifulSoup(text, 'html.parser')

    for attr in soup(["scipt", "style"]):
        attr.extract()

    cleaned_content = soup.get_text(separator = "\n")
    cleaned_content = "\n".join(line.strip() for line in cleaned_content.splitlines() if line.strip())

    return cleaned_content


def split_text(text, max_length = 6000):

    return [

        text

    ]

