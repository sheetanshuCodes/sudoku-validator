# Sudoku Validator

This repository contains a JavaScript application that validates a Sudoku puzzle. The application will return `true` if the 2-D array represents a valid Sudoku and `false` otherwise.

## Validation Criteria
The Sudoku puzzle is considered valid if:
1. Each row contains the digits from 1 to 9 exactly once.
2. Each column contains the digits from 1 to 9 exactly once.
3. Each 3x3 grid contains the digits from 1 to 9 exactly once.

## Core Function

The application's functionality is mainly provided by the `sudokuValidator` function. This function takes a 2-D array as an argument, which represents a Sudoku puzzle, and checks if it's valid based on the criteria mentioned above.

Here is the function's signature:

```javascript
function sudokuValidator(arr)
```

Where `arr` is a 2-D array representing the Sudoku puzzle. Each element in the array is a row in the puzzle, and each element in the row is a number from 1 to 9.

The function returns `true` if the Sudoku puzzle is valid and `false` otherwise.

## Usage

The application uses a web form to collect the Sudoku puzzle input from the user. The form has a text field where the user can enter a 2-D array in JSON format, representing the Sudoku puzzle.

When the form is submitted, the application calls the `sudokuValidator` function with the user's input. If the Sudoku puzzle is valid, the application displays "This is a valid sudoku solution". Otherwise, it displays "This is an invalid sudoku solution".

## Example
To run the sudoku validation, the user needs to input the sudoku board in JSON format. Here is an example of a valid Sudoku puzzle:

```javascript
[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
```

Please note that this application currently does not have a UI for user input, and the input needs to be hardcoded in the script. Future updates may include a user interface for better usability.

## Future Improvements
- Adding user interface for inputting the Sudoku puzzle.
- Providing more detailed validation error messages.

Please feel free to contribute to this project by submitting pull requests or opening issues.
