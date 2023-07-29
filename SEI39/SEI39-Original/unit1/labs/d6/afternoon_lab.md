[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Lab - Classes

## Create the following objects

1. Create a class for a Pet
    - attributes
        - owner - string
        - name - string
        - walk - a method that logs 'walka walka'
    - instantiating a new pet takes the pets name as a parameter and sets the attribute;
    - create one pet and log it
    - run the walk method to make sure it works as expected

1. Create a class for a Dog
    - this should inherit from Pet
    - attributes
        - price - 20
    - methods
        - bark() - log "bark"
        - chaseTail() - log "oh boy oh boy oh boy"
        - getPrice() - return price
    - create a new dog and log it
    - test all the methods to make sure they work as expected


1. Create a class for a Cat
    - this should inherit from Pet
    - attributes
        - price - 10
    - methods
        - purr() - log "purrrrr"
        - clean() - log "cleaning"
        - getPrice() - return price
        - walk() - overwrite the method to console.log 'strut strut'
    - create a new cat and log it
    - test all the methods to make sure they work as expected
    
1. update one property of the dog after it has been created and log it to check
1. updated one property of the cat after it has been creatd and log it to check



## Stretch

- Using classes, generate a deck of cards, stored in an array
    - cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
    - there are 13 cards per suit, values should match what they are in BlackJack (or another game), 
            - Ace, by default is equal to 11, 
            - cards 2-10 share the same face and value
            - Jack, Queen and King have a value of 10
- Figure out how to shuffle the array and `console.log` the top card (Hint: google it)
- Figure out how to compare the top and bottom card and `console.log` both cards and a message that says which card is bigger (or a tie)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
