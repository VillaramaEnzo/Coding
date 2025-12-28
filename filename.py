"""
Submission for: Python & Devops Ninja @Shooju

Written by: Enzo Villarama
Date: 20/12/2025

Description:
This script is a Python script that downloads a zip file from a URL and extracts the contents of the zip file.
The script then reads the contents of the zip file, organises the data according to a specified format,
then outputs the data in stdout as a JSON object.
"""


import urllib.request, zipfile, io, csv, json, sys

url = "https://www.jodidata.org/_resources/files/downloads/gas-data/jodi_gas_csv_beta.zip"


### Defining all the abbreviations for the data

# Only using countries that are listed as participating economies
participating_countries = {
    "AL": "Albania",
    "DZ": "Algeria",
    "AR": "Argentina",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "CA": "Canada",
    "CL": "Chile",
    "CN": "China",
    "TW": "Chinese Taipei",
    "CO": "Colombia",
    "HR": "Croatia",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "GQ": "Equatorial Guinea",
    "EE": "Estonia",
    "FI": "Finland",
    "FR": "France",
    "GA": "Gabon",
    "DE": "Germany",
    "GR": "Greece",
    "HK": "Hong Kong, China",
    "HU": "Hungary",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IT": "Italy",
    "JP": "Japan",
    "KR": "Korea",
    "LV": "Latvia",
    "LY": "Libya",
    "LU": "Luxembourg",
    "MY": "Malaysia",
    "MX": "Mexico",
    "MD": "Moldova",
    "MA": "Morocco",
    "MM": "Myanmar",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NG": "Nigeria",
    "MK": "North Macedonia",
    "NO": "Norway",
    "OM": "Oman",
    "PG": "Papua New Guinea",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PT": "Portugal",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russia",
    "SG": "Singapore",
    "SK": "Slovak Republic",
    "SI": "Slovenia",
    "ZA": "South Africa",
    "ES": "Spain",
    "SE": "Sweden",
    "CH": "Switzerland",
    "TH": "Thailand",
    "TT": "Trinidad & Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UY": "Uruguay",
    "VE": "Venezuela",
    "VN": "Vietnam"
}

energy_products = {

    "LNG": "Liquefied Natural Gas",
    "NATGAS": "Natural Gas",

}

flow_breakdown = {
    "INDPROD": "Production",
    "OSOURCES": "Receipts from Other Sources",
    "TOTIMPSB": "Imports",
    "IMPLNG": "LNG Import",
    "IMPPIP": "Pipeline Import",
    "TOTEXPSB": "Exports",
    "EXPLNG": "LNG Export",
    "EXPPIP": "Pipeline Export",
    "STOCKCH": "Stock Change",
    "TOTDEMC": "Gross Inland Deliveries (Calculated)",
    "STATDIFF": "Statistical Difference",
    "TOTDEMO": "Gross Inland Deliveries (Observed)",
    "MAINTOT": "of which: Electricity & Heat Generation",
    "CLOSTLV": "Closing Stocks",
    "CONVER": "Conversion Factor (m3/tonne)"
}

units = {

    "M3": "Million cubic metres",
    "TJ": "Terajoules",
    "KTONS": "LNG in 1000 tonnes"
}

series_dict = {}

with urllib.request.urlopen(url) as response:
    zip_data = zipfile.ZipFile(io.BytesIO(response.read()))
    with zip_data.open(zip_data.namelist()[0]) as csv_file:

        file = io.TextIOWrapper(csv_file, encoding="utf-8")
        reader = csv.DictReader(file)

        for row in (reader):
            row = {k.lower(): v for k, v in row.items()}
            
            value = row.get("obs_value", "").strip()
            if not value:
                continue

            country, product, flow, unit = (

                participating_countries.get(row["ref_area"], row["ref_area"]),
                energy_products.get(row["energy_product"], row["energy_product"]),
                flow_breakdown.get(row["flow_breakdown"], row["flow_breakdown"]),
                units.get(row["unit_measure"], row["unit_measure"])

            )

            key = (country, product, flow)

            if key not in series_dict:
                series_dict[key] = {
                    
                    "points": [],
                    "fields": {

                        "country": country,
                        "product": product,
                        "flow": flow,
                        "unit": unit,
                        "assessment_code": row.get("assessment_code", "")

                    }

                }
                
            iso_date = f"{row['time_period']}-01"

            series_dict[key]["points"].append([
                iso_date,
                float(row["obs_value"])
            ])
        
        zip_data.close()
        
        ## Arrange the data in the correct order
        for (country, product, flow), data in series_dict.items():
            
            data["points"].sort(key=lambda x: x[0])

            series_json = {

                "series_id": f"gas\\{country}\\{product}\\{flow}",
                "points": data["points"],
                "fields": data["fields"]
            }

            sys.stdout.write(json.dumps(series_json) + "\n")