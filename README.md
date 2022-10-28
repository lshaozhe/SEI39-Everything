<!-- @format -->

# SEI-39 Project 3 Group 2: Aidha

## Group Members

Shao Zhe, Ru Yi, Ian, Zi Hao

# Project Overview

This project is to build a prototype website based on the website design provided by the UXDI team. The purpose of refurbishing Aidha's website is to connect migrant domestic workers and potential volunteers to the information they seek.

For the scope of this project, we focused on 2 user flows:
- Migrant domestic workers (MDWs)
- Volunteers

Due to the time limitation for this project (1 week), the following prorities list was agreed on between the UXDI team and our team:
1. Desktop version of the website for MDWs and volunteer user flows
2. Mobile version of the website for MDWs and volunteer user flows
3. Language translation features
4. Embedding of more than 1 social media source in student stories page

# Folder/ File Structure

## Overall Structure

-   Main
    -   client - React (Managed by Ru Yi)
    -   server - Express (Managed by Ian)
    -   gitignore - global gitignore for both client and server
    -   README.md

## React Components Hierarchy
![hierarchy-structure](/client/src/assets/for_readme/hierarchy.png)

## Server Folder Structure


# DEV NOTES

## Technologies used:
- Front-end (Client):
    - HTML
    - CSS
    - JavaScript (React)
        - Third-party libraries / packages:
            - Core UI
            - Tailwind CSS
            - Material UI
            - React Router
            - React Multi Carousel
            - React Phone Input 2
        - CSS Stylesheet
        - Inline Styling
        - CSS Modules
- Back-end (Server):
    - Node.js
    - Express
    - MongoDB & Atlas
    - Express Validator
    - Mongoose
    - UUID

## General Approach:

1. Sections of the work had been split up front with Shao Zhe leading the team, Ru Yi in charge of managing the front-end folder structure, Zi Hao in charge of the styling, and Ian in charge of the back-end set up.
2. The work was broken up into various pieces and listed on a Google Docs, where each person with available capacity could go in and assign a piece to themselves, and update on the doc once done, to minimise duplicated work and merge conflicts.
3. For the styling, Zi Hao decided on the methods and libraries we could use overall, and he kickstarted the project first with styling, so that the others can reference to his code and style in a similar fashion, to make it seem like a cohesive team effort.

## Information from UXDI team
[User Stories & Wireframes](https://www.figma.com/file/b7U6lE6XHcCp6479KYeHnc/(SEI-%2B-UXDI)-Aidha-Website-Redesign?node-id=0%3A1)

[Assets and Data Specifications Table](https://drive.google.com/drive/folders/14FN7JOKPgIDVsrGosygk1TM0-IP7U4gq)

## Issues yet resolved:
- Mobile breakpoints were not implemented throughout the entire prototype website
- A textfield option for the "Languages Spoken" field in the volunteer sign up form

## Pull Request Guidelines

-   Create branch when making changes
-   Ensure no syntax errors
