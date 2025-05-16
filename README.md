#  Junior Developer Coding Test – JavaScript Solutions

Coding Exercises for Alonso&Alonso Software Developer Test.

  

##  ✅ Section 1: Algorithmic Challenges

  

###  1. FizzBuzz

Prints numbers from 1 to 100, replacing:

- "Fizz" for multiples of 3

- "Buzz" for multiples of 5

- "FizzBuzz" for multiples of both 3 and 5

  

**Observations:**

Simple `ifs` conditions.
  

---

  

###  2. Palindrome Checker

Checks whether a given word or phrase is a palindrome. It ignores spaces and capitalization.

  

Examples:

- "Radar" → `true`

- "Hello" → `false`

- "A man a plan a canal Panama" → `true`

  

**Observations:**

The first step was cleaning the string, turning it into an array, reversing it, and checking equality.

Used array/string and HOF  functions to solve the problem.  

---

  

###  3. Sum of Unique Elements

Returns the sum of all numbers that appear **exactly once** in an array.

  

**Observations:**

The `Map` structure was used as a simpler alternative to `Object.entries`.

Created the map inside `buildFrequencyMap` to store data like:

  

```js

{

1: 3,  // number 1 appears 3 times

2: 1,  // number 2 appears once

3: 4  // number 3 appears 4 times

}

```

  

Then, with `sumUniqueValues`, we count only those that have a frequency of 1 and return the result.

  

---

  

##  ✅ Section 2: Mini Project – To-Do List Console App

  


Requirements:
- The application should allow a user to add, view, delete, and mark tasks as complete.
- Each task should have a title and a status (pending or completed).
- The tasks should be stored in a list, and the application should keep running until the user chooses
to exit.
- Include proper error handling for invalid inputs.

  

Each task includes a title and a status:

-  `[ ]` for pending

-  `[X]` for completed

  

The app uses `readline` module for console input/output.

  

> 🔧 **Note:** These files include runnable tests at the bottom.

> Just execute the files as shown below and you'll see the test output.

> To add more tests, simply call the functions that the existing `console.log` statements use (except for `4-Todo.js`).

> Make sure you have **Node.js installed** to run them.

  

---

  

###  ▶️ To run any test file:

  

```bash

node  1-FizzBuzz.js

node  2-Palindrome.js

node  3-SumOfAllElements.js

node  4-Todo.js

```

## 👨‍💻 Author

Alex Daniel Galo Soto – Software Engineer