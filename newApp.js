function sudokuValidator(arr) {
  const validationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Function to validate rows, columns, and 3x3 grids
  function validate(array) {
    const sortedArr = array.sort((a, b) => a - b);
    return sortedArr.every((num, index) => num === validationArray[index]);
  }

  // Validate rows
  const rowsValid = arr.every((row) => validate(row));

  // Validate columns
  const colsValid = arr[0]
    .map((col, i) => arr.map((row) => row[i]))
    .every((col) => validate(col));

  // Validate 3x3 grids
  let gridsValid = true;
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const grid = [].concat(
        arr[i].slice(j, j + 3),
        arr[i + 1].slice(j, j + 3),
        arr[i + 2].slice(j, j + 3)
      );
      if (!validate(grid)) {
        gridsValid = false;
        break;
      }
    }
  }

  return rowsValid && colsValid && gridsValid;
}

const sudokuForm = document.querySelector(".sudokuForm");
const displayValid = document.querySelector(".displayValid");

sudokuForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputSudoku = JSON.parse(sudokuForm.inputSudoku.value);

  if (sudokuValidator(inputSudoku)) {
    displayValid.textContent = " This is a valid sudoku solution";
  } else {
    displayValid.textContent = " This is an invalid sudoku solution";
  }
});
