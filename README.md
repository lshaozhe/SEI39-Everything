Project's Title and Description
nxn Sudoku Solver - with functions to generate or take existing (thru user inpuet) 4x4, 9x9, 16x16 sudoku puzzle, capable of solving these puzzle with backtracking algorithm.



Project Motivation
Main objective to fulfil General Assembly's SEI Project 1.

Personally, the focus of the project was to focus on JS fundamentals with the focus to demostrate understading of functions, loops, variable scope, multidimentional array manipulation, DOM (non-exhaustive). The project makes use of basic html and css for static webpage display.



Technology Used
HTML, CSS, JS, and was deployed on AWS S3 (http://lshaozhe.sudoku.com.s3-website-ap-southeast-1.amazonaws.com/index.html) (works as of 16/09/22 with AWS Free Tier).



Goals for Project
MVP - 9x9 solver
Stretched goals 1 - nxn solver
Stretched goals 2 - nxnxn solver (Not completed)



Code Structure
HTML files: a index.html page for default loading page, and seperate htmls to display the 9x9, 4x4 and 16x16 solvers.
CSS file: single css file to support display features for all above htmls.
JS files: 
1. handles.js - for DOM and eventlisteners, and immediate functions invoked by eventlisteners.
2. script.js - backend logic and solver for generation and solving of the sudoku puzzle.



Key Logic/ Functions within JS Files
For handles.js:
3 Main Event Listeners: on page load, on clicks and on input change. Each invokes various functions connected to backend JS to solve/ generate puzzles.
Read Write to pass sudoku grid information between HTML and backend JS (thru DOM).

For Script.js
3 Main Sections:
1. To generate 3 arrs based on the n (grid length) and dimensions of board. initialArr functions to take in user inputs which is duplicated (when completed)
solnArr functions only for backend solver to work on solutions, and
errArr which keeps track of the possible solutions on empty grids (for hints generation).
2. Contrains checker functions which checks conflicts(duplicates) of each grid element for compliance to sudoku rules
3. Solver with backtracking algorithm (recussive funcions)



Pseudo Code for Backtracking (referenced from https://www.geeksforgeeks.org/introduction-to-backtracking-data-structure-and-algorithm-tutorials/#:~:text=Backtracking%20is%20an%20algorithmic%20technique,reaching%20any%20level%20of%20the):  

1. Recursive backtracking solution. 
void findSolutions(n, other params) :
    if (found a solution) :
        solutionsFound = solutionsFound + 1;
        displaySolution();
        if (solutionsFound >= solutionTarget) : 
            System.exit(0);
        return

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            findSolutions(n+1, other params);
            removeValue(val, n);


2. Finding whether a solution exists or not 
boolean findSolutions(n, other params) :
    if (found a solution) :
        displaySolution();
        return true;

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            if (findSolutions(n+1, other params))
                return true;
            removeValue(val, n);
        return false;

Key Learning Points/ Bug Fixes
Pass by Reference on Arrays - unintended array manipulation when generating arrays thru loops due to single reference.

Recursive Function Stack Generation and impact to local/ global variables

Attaching EventListeners based on bubbling concepts

Organisation and documentation of codes - for ease of understanding



Unresolved/ Known issues
bigger boards (n=16) freezes browser occasionally - suspect synchronous function calls and returns, applied async await but does not resolve issue entirely. Hence unable to generate larger sized boards (n>16) on frontend (although JS backend works). Perhaps issue with mems/ computational power (employ other solving logic or parallel compute?).

3 dimensional solver does not work with backend, likely incomplete understanding of recurssive function stack and its impact on variable scope.



Things to Improve On/ Reflections
1. Better version control thru documentation and commits onto git.
2. Refractor codes for simplicity of understanding/ troubleshooting/ further development.