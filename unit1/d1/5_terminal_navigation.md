[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Navigating the Terminal

## Lesson Objectives

_After this lesson, students will be able to:_

1. Describe basic aspects of how classes will work
1. Download and install software necessary for the class
1. Open Terminal
1. Describe what a command line interface is
1. Describe the state of the current directory
1. Change Directories
1. List some keyboard shortcuts
1. Create files and folders
1. Navigate using relative pathing on the command line
1. Navigate using absolute pathing on the command line
1. Run some code

## Describe basic aspects of how classes will work

- Lesson headers
  - Headers will be posted for all lessons and labs with links to markdowns and the Zoom channel.
- Markdown
  - Markdown contains reference material related to the lesson
  - Slides from the markdown will be posted into Slack during the lesson
- Sharing screen
  - The instructor will screenshare for demonstration purposes. Double-click out of fullscreen.
- Screen real-estate: markdown, zoom, text editor, terminal, slack
  - Command-tab to cycle applications
- Muting
  - Be muted unless speaking
- Asking questions
  - Ask away! Either in Slack or out loud as a learner there are **NO** stupid questions
- Visibility of instructor code
  - Speak up if the instructor's code is not visible (eg. too small).
- Thumbsups
  - We use the thumbsup :thumbsup: emoji to gauge completeness of exercises. Click on the thumb when you are done with an exercise.
- Lesson speed
  - It will start slow and hopefully gradually speed up.
  
## Notes

- This course does not teach the ins and outs of a programming language
- Help each other as much as possible

## Download and install software necessary for the class

- Visual Studio Code installed? Or your favorite text editor.
- Node installed?
- Github Desktop

## Open Terminal

- `⌘ (Command) + Space`, or open Spotlight
- type `"Terminal"`
- `Enter`

![Terminal](https://i.imgur.com/CvggrYa.png)

- Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".

![Keep in dock](https://i.imgur.com/ZrPuVNq.png)

### Terminal Preferences

You can change the color of your Terminal and the font size. It is recommended to make your Terminal output easier to read, rather than the tiny default output.

> Terminal > Preferences > Pro

## Describe what a command line interface is

Terminal provides a Command Line Interface (_CLI_) to the operating system. With it you can give your computer direct, text-based instructions. It is the most powerful piece of software on your computer! Think of it as the central hub of your development process. For now, we will use it to navigate the files and folders in our computer.

When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`.

In Terminal-land, **Directories** are the same as **Folders** (we just call them **Directories**).

![Terminal](https://i.imgur.com/tTyOkwV.png)

In **Finder**, we can also navigate our computer's folders and files: folders contain files and more folders:

![Finder](https://i.imgur.com/CR7PmAO.png)

## Describe the state of the current directory

The Command Line understands commands written in the `bash scripting language`. The commands are abbreviations of English words, or acronyms.

- `pwd` - will print the current working directory. It shows you a `path`. This `path` shows you where you are currently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.

![pwd example](https://i.imgur.com/4aaT88x.png)

- `ls` - Lists the contents of the current directory. You can see
  - the immediate _child_ directories (the directories inside this directory)
  - the files in this directory

![ls example](https://i.imgur.com/H2RTUny.png)

- Bash commands can take `flags` denoted by a dash `-`
  - `ls -a` - list content including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.
  - `ls -l` - list content and give meta information about each item

Directories (folders) can have directories within them, and there can be directories inside _those_ directories, ad infinitum. This creates a tree structure where directories can have many children with many different branches.

![Tree Structure](http://i.imgur.com/M6OgKZJ.png)

## Change Directories

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory`
  - navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..`
  - navigates into the parent of the current directory
  - `..` is shorthand for parent
- `cd` will take you back home

## List some keyboard shortcuts

In the long term, reduce your reliance on the mouse. More Bash keyboard shortcuts:

- `⌘ K` Clear the Terminal window
- `option arrow` Move cursor by word
- letter[TAB]
  - autocompletes (case-sensitive)
- up :arrow_up: / down :arrow_down_small: arrow
  - cycle command history

## Create files and folders

- `mkdir`
  - makes a directory
  - Example:
    - `mkdir directory_name`
      - makes a directory called 'directory_name'`
- `touch`
  - creates an empty file
  - A file typically will have a **file extension** like `.txt` whereas a directory will not.
  - Example:
    - `touch file.txt`
      - makes a .txt file

### Activity (10 min)

#### Construct a Labyrinth

Using what you know about navigating directories and creating files and folders, construct a 'labyrinth' on your desktop.

**Precision** is important. There are a few layers to this exercise. Be patient.

- Make sure you are in the correct directory when you go to create another directory or file.
- Make sure you use `touch` to make files, and `mkdir` to make directories. **files** and **directories** are two different things.

- Navigate to Desktop
- `mkdir Labyrinth`, `cd Labyrinth`
- Make a directory structure like this:

![labyrinth](https://i.imgur.com/pY0MxS8.png)

**parlor** and **stairway** are _child directories_ of the Labyrinth directory.

**sarah_williams.txt** is a _file_ inside the the ballroom directory.

If you make a mistake, don't worry, just keep adding the right stuff to the right place.

## Navigate using relative pathing on the command line

Chain more directories to the current path with the `/` separator

- Go down the chain into child directories
  - `cd parent_directory`
  - `cd parent_directory/child_directory`
  - `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories
  - `cd ..`
  - `cd ../..`
  - `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down
  - `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:

  - `cd ../../auntie_directory`

### Activity

#### Navigate the Labyrinth

- Navigate to the Labyrinth `root` directory
- From the Labyrinth `root` directory, navigate to the `stairway`
- From the `stairway`, navigate to the `parlor`
- From the `parlor`, navigate to the `dining room`
- From the `dining room`, navigate to the `escher room`
- From the `escher room`, navigate to the Labyrinth root

### Actual Activity (10 min)

#### Navigate the Labyrinth (Actual)

For each of these, write your command on one line, using full paths:

- Navigate to the Labyrinth `root` directory
- From the Labyrinth `root` directory, navigate to the `dining_room`
- From the `dining room`, navigate back up the root directory
- From the Labyrinth root directory, navigate to the `stairway`
- From the `stairway`, navigate to the `parlor`
- From the `parlor`, navigate to the `escher_room`
- From the `escher room`, navigate to the `throne_room`
- From the `throne_room`, navigate to the `ball_room`

## Navigate using absolute pathing on the command line

Move anywhere relative to the `home` directory:

`cd ~/` - the path starts in `home` directory

Example:

- `cd ~/Desktop/Labyrinth/stairway/escher_room`

Navigates to the escher room _no matter where_ you are currently located in your filesystem

> NOTE: You can combine absolute and relative pathing when copying or moving files from one location to another with `cp` and `mv`.

### Activity (3 min)

#### Navigate the Labyrinth II

Using absolute pathing:

- Navigate to the *throne_room*
- Navigate to the *ballroom*
- Navigate to the *parlor*

## Run some code

We are going to:

- make a file
- open it in our text editor
- write some code
- run the code in Terminal

### Code Along (5 min)

#### Create Files/Directories

- In Terminal, navigate to Documents.
- Make a directory `w1d1_student_examples`
- Go inside the directory
- Make a file `first_code.js`
- Open up VSCode through Spotlight or the Dock.
- Go to `VSCode -> Command + Shift + P -> type Shell -> Shell Command : Install code in PATH`
  - this allows you to open VSCode using a terminal command
- Close VSCode
- From inside the `w1d1_student_examples` directory, open VSCode from the command line with `code .` (code space dot)
  - **NOTE** This might not work on some systems. If not we will get it sorted out in time. For now, Just open the directory from `File -> Open`, and open the `w1d1_student_examples` directory.
- When VSCode opens, you should see the `w1d1_student_examples` directory and all the files inside the directory (in this case, just the `first_code.js` file.

#### Write/Run Code

- Check version of Node `node -v`. You should have a version greater than 8.
- Let's send a message to the console. It is somewhat of a tradition to write a `'Hello World'` message as the first thing you do in programming.

```js
console.log('Hello World!');
```

Run the code in Terminal

> `node filename.js`
> => Hello World!

**Congrats!** You've written your first `"Hello World"` of SEI!

We can send whatever we want to the console.

```js
console.log('The rain in Spain falls mainly on the plain');
```

## More Terminal Keyboard shortcuts

In the long term, reduce your reliance on the mouse.
More Bash keyboard shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` Move cursor by word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U

`cd -` toggle previous directory

There are also video tutorials [here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx)

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
