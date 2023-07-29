[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Audubon Society Bird Photo Contest

![Shoebill Stork](2985311_orig.jpg)

> link doesnt work, but its just a picture of the bird

Your local Audubon Society has reached out to you to help them put together an online contest.

They want members of the public to go out and take photos of birds and submit them to their website. The best bird photo will honored with a premium Audubon Society membership!

## Deliverables

- Users should be able to **Create** a new bird (species, image and person who submitted the image)
- Users should be able to **Read** a list of submitted members' birds

**HFM**

- Users should be able to **Delete** their birds, in case they changed their mind about being in the contest
- Users should be able to **Update** their bird submission approval by clicking a button that says 'approve' when `approved` is false, and the button should read `un-approve` when `approved` is true

## Get Started

- Here are a few bird submissions to get you started

```js
const birds = [
  {
    birdName: "Royal Flycatcher",
    image: "https://farm4.staticflickr.com/3469/3816580994_12c0d75580_z.jpg",
    user: "Veloria",
    approved: false,
  },
  {
    birdName: "Resplendent Quetzal",
    image:
      "https://d1bv4heaa2n05k.cloudfront.net/user-images/1543501996711/shutterstock-549082930_main_1543502021955.jpeg",
    user: "Allison",
    approved: false,
  },
  {
    birdName: "Livingstone's Turaco",
    image:
      "https://64.media.tumblr.com/072040b144b8773ecc05257f929721d6/tumblr_pe90kpNYo61r6t4tvo1_1280.jpg",
    user: "Rosa",
    approved: true,
  },
  {
    birdName: "Superb Bird-of-paradise",
    image:
      "http://www.funcage.com/blog/wp-content/uploads/2011/08/Superb-Bird-of-paradise.jpg",
    user: "Alexander",
    approved: false,
  },
  {
    birdName: "Tweet_r",
    image: "https://i.imgur.com/VGAxKX1.png",
    user: "Debbie",
    approved: false,
  },
  {
    birdName: "King Vulture",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sarcoramphus-papa-king-vulture-closeup-0a.jpg/1200px-Sarcoramphus-papa-king-vulture-closeup-0a.jpg",
    user: "Gibson",
    approved: true,
  },
  {
    birdName: "Secretary Bird",
    image:
      "https://i.pinimg.com/736x/ab/f7/da/abf7da927e784c0558df9e30ca15ddca.jpg",
    user: "Harold",
    approved: true,
  },
  {
    birdName: "Frilled Coquette Hummingbird",
    image:
      "https://78.media.tumblr.com/10ad7398c6cabffe666159b09bf50e57/tumblr_nzt5dl55QF1u38l26o1_500.jpg",
    user: "Maude",
    approved: false,
  },
  {
    birdName: "Boat-billed Heron",
    image:
      "https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a",
    user: "Bill",
    approved: true,
  },
  {
    birdName: "Ex-Parrot",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681",
    user: "Monty",
    approved: false,
  },
];
```

- make your browser view more manageable

```css
img {
  max-width: 100px;
}
```

- Find some unusual bird images here:

https://www.reddit.com/r/PicsOfUnusualBirds/

## Hungry for More

- Users should be able to **Update** thier birds name, image and user name, in case they made a typo/mistake

- Implement Administrator mode!
  - Make a simple html button that when clicked will toggle whether administrator mode is on/off (true false)
  - When true, there should be new functionality that
    - only allows the administrator to approve entries as valid
    - if an entry is approved, it will render on the page both when administrator mode is on or off
    - if an entry is not approved, it will not be rendered on the page when admin mode is off. In admin mode, it should have a grey background or other visual cue that it is not valid/approved
    - remove the ability for anyone to delete a bird, and only let the administrator delete entries

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
