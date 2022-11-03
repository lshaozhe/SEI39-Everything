## Data types
char - char(10) initiates 10 char space, spaces not utilised are filled with blank space
varchar - no blank space filled
text

int2(smallest), smallserial - serials just automatically insert the next integer in increment of 1
int4(int), serial - default int will be 4bytes
int8(bigint), bigserial

numeric(x, y) - x: total number of digits, y: total number of decimals
decimal(x, y) 

timestamp - in seconds since 1 jan 1970

boolean/ bool/ bit - 1 or 0

blob - for picture in hex

uuid

## Naming conventions
database_name
table_name
column_name

## sql vs nosql
table collections
row document
column key

## Keys
surrogate keys - non natural keys (like serial and uuid)
concatenated keys - a few column in data is concated to form a key

## linking tables
0NF - no linking of tables, just one table
name languages
lemon   C, C++,VB
non     C++, Java, JS
tofu    Java, Python

1NF
name    languages
lemon   C
lemon   C++
lemon   VB
non     C++
non     Java
non     JS
tofu    Java
tofu    Python

2NF
Table 1: name
id      name
1       lemon
2       non
3       tofu

Table 2: languages
id      language
1       C
2       C++
3       VB
4       Java
5       JS
6       Python

Table3: name_languages
name_id     language_id
1       1
1       2
1       3
2       2
2       4
2       5
3       4
3       6

## example
po_number
po_placed_date
buyer_name
buyer_address
buyer_contract
part_number
part_description
part_buy_price
part_sell_price
part_amount
part_type

table1: po
number (primary key) - varchar(10)
placed_date - timestamp
buyer_id - int (foreign key)

table2: buyers
name - text
address - text
contact - char(8)
id(primary key) - serial

table3: parts
number (primary key) - varchar(10)
description - text
buy_price - numeric(10,2)
sell_price - numeric(10,2)
amount - int
type - text
po_number - varchar(10) (foreign key)

linkages
buyer to po, one to many
po to parts, one to many

many to many r/s -> can simplify with surrogate table