from random import randint


def main():
    number = randint(0, 10)
    user_input = input('I\'m thinking of a number between 1 and 10.\nPlease guess what it is:')

    while True:
        try:
            user_input = int(user_input)
        except ValueError:
            print('oh! That is NOT a number, Bart!')
            user_input = input('>')
        else:
            if user_input == number:
                print('That\'s it! You win!')
                break
            elif user_input < number:
                print('That is too low!')
                user_input = input('>')
            else:
                print('That is too high!')
                user_input = input('>')


if __name__ == '__main__':
    main()
