import csv

with open('/Users/zumot/Downloads/site/google-ads-bulk-upload.csv', 'r') as f:
    reader = csv.reader(f)
    rows = list(reader)

headers = rows[0]
print(f"Header length: {len(headers)}")
for i, r in enumerate(rows):
    if len(r) != len(headers):
        print(f"Row {i+1} has {len(r)} columns")
