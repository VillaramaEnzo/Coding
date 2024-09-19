import streamlit as st # type: ignore
from scrape import (scrape_site, extract_text, clean_text, split_text)


def main():
    st.title("AI Web Scraper")

    url = st.text_input("Enter the URL of the website you want to scrape:")

    if st.button("Scrape Site"):
        if url:
            st.write("Scraping the website...")
            result = scrape_site(url)

            body_content = extract_text(result)
            cleaned_content = clean_text(body_content)
            

            st.session_state.dom_content = cleaned_content

            with st.expander("View Document Content"):
                st.text_area("Document Content", cleaned_content, height = 300)

            # Parse to LLM to get the summary

        if "dom_content" in st.session_state:
            parse_desciption = st.text_area("Please Describe what you want to parse from the document:")
            
            if st.button("Parse Content"):
                if parse_desciption:
                    st.write("Parsing the content...")

                    chunks = split_text(st.session_state.dom_content)

                    #Todo: Call the LLM API here

        else:
            st.write("Please enter a URL.")


if __name__ == "__main__":
    main()