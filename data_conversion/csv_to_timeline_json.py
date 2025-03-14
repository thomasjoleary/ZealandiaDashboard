import csv
import json

# this script converts a csv file to a json file that can be used for timeline visualization
# this is useful for taking excel data and converting it

# given a csv with the following format, convert to json
# csv:
#    stream,forest,people,place name,latitude,longitude,info,year,month,day,displayDate,event details,image link,relevant citations
#    0      1      2     3           4        5         6    7    8     9   10          11            12         13

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
            if loc['name'] == row[3]:
                loc_index = i
                break
        # if location not found, create new location
        if loc_index == -1:
            locations.append({
                'name': row[3],
                'lat': float(row[4]),
                'lng': fix_long(float(row[5])),
                'info': row[6],
                'timeline': []
            })
            loc_index = len(locations) - 1
        # add timeline data
        # first, get tags
        tags = []
        if row[0] == 'x':
            tags.append('stream')
        if row[1] == 'x':
            tags.append('forest')
        if row[2] == 'x':
            tags.append('people')
        locations[loc_index]['timeline'].append({
            'year': int(row[7]),
            'month': int(row[8]) if (row[8] != '' and row[8] != 'null') else None,
            'day': int(row[9]) if (row[9] != '' and row[9] != 'null') else None,
            'displayDate': row[10],
            'event': row[11],
            'img': [
                {
                    'src': row[12],
                    'alt': write_alt_text(row[3], row[7], row[8], row[9]) # remove alt text
                }
            ],
            'tags': tags,
            'citations': row[13].split(' &&& ') if row[13] != '' else []
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