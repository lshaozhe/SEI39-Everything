# functions
# uniquely python, you can tell function to take arguments of via name of the parameter
import itertools


def sum_all(*args):  # the * makes it take infinite args and push it into a list
    sum = 0
    for num in args:
        sum += num
    return sum


total = sum_all(1, 2, 3, 4, 5, 6)
print(total)


def print_dictionaries(**kwargs):  # kw is keyword, this is the same as the top part, note double *
    for key, value in kwargs.items():
        print(key, value)


print_dictionaries(name='John', country='Singapore')
# generalising things would be something like def do_something(arg1, arg2, *args, **kwargs)
# stars must go behind always

# classes
class Fruit:  # parent need no ()

    type = 'Tropical'  # Global variable (within the scope of the class)

    def __init__(self, name: str, type: str, seeds: bool,):  # not validation, just reminder as you type the codes later
        self.name = name
        # self.type = type
        self.seeds = seeds

    def speak(self):
        print('I am a', self.name)
        print('I am a', Fruit.type, 'fruit')  # calling the global variable by classname.variablename

    @classmethod  # static function
    def class_function(cls):
        return print('static function ran')


durian = Fruit('Durian', 'Tropical', True)  # invoking an instance of class

print(type(durian))
print(durian.type)
durian.speak()
Fruit.class_function()

# inheritance
class Personnel:
    def __init__(self, name):
        self.name = name

    def who_am_i(self):
        print('I am', self.name)


class Manager(Personnel):
    def __init__(self, name, managing):
        Personnel.__init__(self, name)
        self.managing = managing

    def who_do_you_manage(self):
        print('I manage', self.managing)


manager = Manager('George', 'Glen')
manager.who_am_i()
manager.who_do_you_manage()


# polymorphism - it is okay to have same function name in multiple classes
class One:
    def __init__(self, name):
        self.name = name

    def print_out(self):
        print('One')


class Two:
    def __init__(self, name):
        self.name = name

    def print_out(self):
        print('Two')


one = One('some')
two = Two('where')


def print_out(calling):
    calling.print_out()


print_out(one)
print_out(two)

# scoping
foo = 5

def func():
    global foo  # tells interpreter to use the global variable, else foo will be a new locally defined variable
    foo = 1
    print(foo)

# operation
#int / int = float
#int // int = int (it will just drop the decimal)

# casting - changing datatypes
# int(x)
# float(x)
# str(x)

# template literals
string = 'My name is {name}'.format(name='Leonard')

name = 'Leo'
address = 'Sg'
string1 = 'My name is {}'.format(name)  # for one variable
string2 = 'My name is {0}. {0} lives in {1}'.format(name, address)
string3 = f'My name is {name}'  # new way of writing
string4 = (
    f'etc etc {name}'
    f'etc et {address}'
)

print(string, string1, string2)

# escapes
# \n - newline
# \t - newtab

# formatting numbers
print(format(1/3, '.2f'))  # returns a string
print(format(52000, ','))  # adding commas

# reading/ writing file in python
input_file = open('text.txt')
print(input_file.read())
input_file.close()

# alternative way, no need close file. closes file after code 'block'
with open('text.txt') as input_file:
    print(input_file.read())

input_file = open('text.txt', 'w')  # if no second arg it will just read, or 'a' to append

input_file.write('Apples are nice\n')
input_file.write('Pears are nice\n')

input_file.close()

# try catch
my_num = None

while my_num is None:
    try:
        my_num = int(input('Please give me a number:'))
    except ValueError as err:  # can replace ValueError as Exception as well
        print('That is not a good input, please try again.')
        print('Error was', err)
    except Exception as err:  # can have multiple catch
        pass

print('Thanks for typing the number', my_num)

# iteration tools
numbers = ['one', 'two', 'three', 'one', 'one', 'four',]

numbers.sort()

for key, group in itertools.groupby(numbers):
    print(key, group)

# chaining
list_1 = ['one', 'two', 'three']
list_2 = [0, 1, 2, 3]
list_3 = range(4)

big_list = list_1 + list_2
big_list = list(itertools.chain(list_1, list_3))  # it is faster than concat
print(big_list)

import itertools

primes = [1, 3, 5, 7, 13, 17, 19, 23, 27, 29]

results = list(itertools.accumulate(primes))
print(results)

# list comprehension

square_number = []
for item in primes:
    square = item ** 2
    square_number.append(square)

square_numbers = [i ** 2 for i in primes]  # faster in execution
# syntax: new_list = [modification for_loop <condition>]

square_numbers = [i ** 2 for i in primes if i % 2 != 0]  # faster in execution

print(square_numbers)
