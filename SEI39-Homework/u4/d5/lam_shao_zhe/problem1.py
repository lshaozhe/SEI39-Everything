from random import randint


def main():
    number = randint(0, 10)
    user_input = input('I\'m thinking of a number between 1 and 10.\nPlease guess what it is:')
    user_input = int(user_input)
    while True:
        if user_input == number:
            print('That\'s it! You win!')
            break
        elif user_input < number:
            print('That is too low!')
            user_input = int(input('>'))
        else:
            print('That is too high!')
            user_input = int(input('>'))


if __name__ == '__main__':
    main()
