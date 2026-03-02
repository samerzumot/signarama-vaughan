import csv

with open('/Users/zumot/Downloads/site/google-ads-bulk-upload.csv', 'r') as f:
    reader = csv.reader(f)
    rows = list(reader)

headers = rows[0]
r = rows[80]
for i in range(len(headers)):
    if r[i].strip():
        print(f"{headers[i]}: [{r[i]}]")
