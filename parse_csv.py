import csv

with open('/Users/zumot/Downloads/site/google-ads-bulk-upload.csv', 'r') as f:
    reader = csv.reader(f)
    rows = list(reader)

headers = rows[0]
for i, line in enumerate(rows):
    if i == 0:
        continue
    if len(line) != len(headers):
        print(f"Row {i+1} has {len(line)} columns, expected {len(headers)}")

print("Done checking column counts.")

# check row 81 (which is index 80)
print("\nRow 81 components:")
for i, val in enumerate(rows[80]):
    print(f"{headers[i]}: {val}")

