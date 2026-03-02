import csv

valid_types = {
    "Campaign", "Location", "Ad Group", "Keyword", "Responsive search ad", "Sitelink",
    "Callout", "Campaign Negative Keyword"
}

with open('/Users/zumot/Downloads/site/google-ads-bulk-upload.csv', 'r') as f:
    reader = csv.reader(f)
    rows = list(reader)

for i, row in enumerate(rows):
    if i == 0: continue
    t = row[0]
    if t not in valid_types:
        print(f"Row {i+1} has unknown/ambiguous Type: '{t}'")
print("Done parsing types.")
