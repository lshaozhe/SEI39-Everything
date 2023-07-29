message = [{'beeps': 2, 'boops': 6},
           {'beeps': 0, 'boops': 5},
           {'beeps': 9, 'boops': 3},
           {'beeps': 4, 'boops': 8},
           {'beeps': 10, 'boops': 5},
           'BOP!',
           {'beeps': 11, 'boops': 12},
           {'beeps': 5, 'boops': 10},
           {'beeps': 1, 'boops': 17},
           {'beeps': 5, 'boops': 7},
           {'beeps': 4, 'boops': 0}, ]

decoded_message = ''

for item in message:
    if type(item) == dict:
        temp = chr(96+item['beeps']+item['boops'])
        decoded_message = decoded_message+temp
    else:
        decoded_message = decoded_message + ' '

print(decoded_message)
