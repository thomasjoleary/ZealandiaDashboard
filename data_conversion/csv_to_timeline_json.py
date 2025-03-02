import csv
import json

# this script converts a csv file to a json file that can be used for timeline visualization
# this is useful for taking excel data and converting it

# given a csv with the following format, convert to json
# csv:
#    place name,latitude,longitude,year,month,day,event details,image link,relevant citations

# by default, the csv file has no header
def csv_to_json(csv_file, json_file, hasHeader = False):
    # read csv file into memory
    with open(csv_file, 'r', encoding='utf-8') as f:
        # csv reader, tab-delimited
        reader = csv.reader(f, delimiter='\t')
        if hasHeader:
            # ignore header
            header = next(reader)
        # get data
        data = [row for row in reader]
    # read tsv file

    # convert to json
    locations = []
    # determine timeline data
    for row in data:
        # get location index
        loc_index = -1
        for i, loc in enumerate(locations):
            if loc['name'] == row[0]:
                loc_index = i
                break
        # if location not found, create new location
        if loc_index == -1:
            locations.append({
                'name': row[0],
                'lat': float(row[1]),
                'lng': fix_long(float(row[2])),
                'info': row[3],
                'timeline': []
            })
            loc_index = len(locations) - 1
        # add timeline data
        locations[loc_index]['timeline'].append({
            'year': int(row[4]),
            'month': int(row[5]) if (row[5] != '' and row[5] != 'null') else None,
            'day': int(row[6]) if (row[6] != '' and row[6] != 'null') else None,
            'event': row[7],
            'img': [
                {
                    'src': row[8],
                    'alt': write_alt_text(row[0], row[4], row[5], row[6]) # remove alt text
                }
            ]
        })

    # write to json file
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump({'locations': locations}, f, indent=4)

# helper function to write alt text
def write_alt_text(name, year, month, day):
    if (year is None or year == 'null'):
        return name
    elif (month is None or month == 'null') or (day is None or day == 'null'):
        return name + ' ' + year
    else:
        return name + ' ' + year + '-' + month + '-' + day 

# helper function to resolve out of bounds longitudes
def fix_long(lat):
    if lat < -180:
        return lat + 360
    if lat > 180:
        return lat - 360
    return lat

csv_to_json('data_conversion/in.csv', 'data_conversion/out.json')