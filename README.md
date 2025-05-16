# Junior Developer Coding Test – JavaScript Solutions

For testing all of the files 

---

## ✅ Section 1: Algorithmic Challenges

### 1. FizzBuzz
Prints numbers from 1 to 100, replacing:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both 3 and 5

Obseerrvatrions:
Simple ifs conditions.


### 2. Palindrome Checker
Checks whether a given word or phrase is a palindrome. It ignores spaces and capitalization.

Examples:
- "Radar" → `true`
- "Hello" → `false`
- "A man a plan a canal Panama" → `true`
Observartions:
The first steps was cleaning the string, turning into an array, reverse and check. Use array/string functions to solve the problem.
### 3. Sum of Unique Elements
Returns the sum of all numbers that appear **exactly once** in an array.


Observation: 
The Map structure was used as a simplistic way to Object.entries, we createed the Map on build frecuency map, to save for example

{
 Number: Frecuency
}, by examplem,

{
    1:3, //number 1 appears 3 times
    2:1,  //number 2 appears 1 times
    3:4, //number 3 appears 4 times
}
Then with sumUniqueValues we count the ones that have 1 frecuency and returnr the answer

---

## ✅ Section 2: Mini Project – To-Do List Console App

A console-based interactive to-do list application with the following options:

1. Add a task  
2. View all tasks  
3. Mark a task as complete  
4. Delete a task  
5. Exit the application

Each task includes a title and a status:  
- `[ ]` for pending  
- `[X]` for completed  

The app uses Node.js's `readline` module for console input/output.


> 🔧 **Note:** These files include runnable tests at the bottom, just execute the files like it says below and it gives test, if you want to add more test just call the functions that the console.logs are calling (except on 4-Todo.js) and teest. 
> Make sure you have **Node.js installed** to run them.

### ▶️ To run any test file:

```bash
node 1-FizzBuzz.js
node 2-Palindrome.js
node 3-SumOfAllElements.js
node 4-Todo.js


