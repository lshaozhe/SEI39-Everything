# General Guidelines for the Team:
The src folder structure is as follows:
- assets
    - images, logos etc from UX team
- common
    - reusable components across pages should be saved here
- components
    - code concerning logic for pages (how things work)
- data
    - dummy data for front-end to use while back-end is created can be saved here
- hooks
    - custom hooks will be saved here
- pages
    - for presentation only for pages (mainly for HTML rendering)
- App.js
    - routes & context will be saved here

Ground rules:
- Make names as descriptive as possible
- Divide your code into sections by commenting out headers e.g.
    /* ===============================================
    // HEADER
    =============================================== */
- Comment every piece of code you write (except those very basic ones that everyone can understand at a glance). To standardise, write your comment ABOVE the code
- For small components that will appear in more than one section, please save in the common folder.
- Double check that a common component has not already been written before you write your own.