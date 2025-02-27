import csv
import json

# this script converts a csv file to a json file that can be used for timeline visualization
# this is useful for taking excel data and converting it

# given a csv with the following format, convert to json
# csv:
#    place name,latitude,longitude,year,month,day,event details,image link,relevant citations


def csv_to_json(csv_file, json_file):
    # read csv file
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        # get header
        header = next(reader)
        # get data
        data = [row for row in reader]

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
                'timeline': []
            })
            loc_index = len(locations) - 1
        # add timeline data
        locations[loc_index]['timeline'].append({
            'year': int(row[3]),
            'month': int(row[4]) if (row[4] != '' and row[4] != 'null') else None,
            'day': int(row[5]) if (row[5] != '' and row[5] != 'null') else None,
            'event': row[6],
            'img': [
                {
                    'src': row[7],
                    'alt': row[0] + ' ' + row[3] + ('-' + row[4] if row[4] != '' else '') + ('-' + row[5] if row[5] != '' else '')
                }
            ]
        })

    # write to json file
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump({'locations': locations}, f, indent=4)

# helper function to resolve out of bounds longitudes
def fix_long(lat):
    if lat < -180:
        return lat + 360
    if lat > 180:
        return lat - 360
    return lat

csv_to_json('convert.csv', 'out.json')