const sudokuValidator = (arr) => {
  // The array validationArray is used to validate whether any
  // of the rows, columns or 3x3 grids contain a number
  // more than once.
  const validationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // trueFalse array store an array of results in Boolean format.
  // These results come from validating each row, column and 3x3 matrix.
  // In the end, we check whether any of the elements in this array is false.
  // If it is, the whole test fails and we infer that the input array
  // is not a valid sudoku solution. If all elements of this array are true,
  // we infer that it's a valid sudoku solution.
  const trueFalse = [];

  //Create an array of 3x3 grids present in the sudoku solution.
  const threeByThreeMatrix = [];
  function updateMatrix(a, b) {
    const threeByThreeArray = [];
    for (i = a; i < a + 3; i++) {
      for (j = b; j < b + 3; j++) {
        threeByThreeArray.push(arr[i][j]);
      }
    }
    threeByThreeMatrix.push(threeByThreeArray);
  }
  for (m = 0; m < 9; m += 3) {
    for (n = 0; n < 9; n += 3) {
      updateMatrix(m, n);
    }
  }

  //Validate 3x3 grids in the sudoku solution.
  //Loop through each 3x3 grid to check whether all grids contain numbers from 1 to 9 exactly once.
  threeByThreeMatrix.forEach((row) => {
    const sortedArr = row.sort((a, b) => a - b);
    const list = sortedArr.filter((num, index) => {
      if (num !== validationArray[index]) {
        return true;
      }
    });
    //Update isValid array above with true, false.
    if (list.length === 0) {
      trueFalse.push(true);
    } else {
      trueFalse.push(false);
    }
  });

  //Create a transposed array from the arr to check for the columns.
  const verticalArray = [];
  for (i = 0; i < 9; i++) {
    const transposedArray = arr.map((row) => row[i]);
    verticalArray.push(transposedArray);
  }
  //Validate columns in the sudoku solution.
  //Loop through each column to check whether all grids contain numbers from 1 to 9 exactly once.
  verticalArray.forEach((row) => {
    const sortedArr = row.sort((a, b) => a - b);
    const list = sortedArr.filter((num, index) => {
      if (num !== validationArray[index]) {
        return true;
      }
    });
    if (list.length === 0) {
      trueFalse.push(true);
    } else {
      trueFalse.push(false);
    }
  });
  //Create a array from the arr to check for the rows.
  const horizontalArray = [];
  for (i = 0; i < 9; i++) {
    const horizontalSinArr = arr[i].map((num) => num);
    horizontalArray.push(horizontalSinArr);
  }
  //Validate rows in the sudoku solution.
  //Loop through each row to check whether all grids contain numbers from 1 to 9 exactly once.
  horizontalArray.forEach((row) => {
    const sortedArr = row.sort((a, b) => a - b);
    const list = sortedArr.filter((num, index) => {
      if (num !== validationArray[index]) {
        return true;
      }
    });
    if (list.length === 0) {
      trueFalse.push(true);
    } else {
      trueFalse.push(false);
    }
  });
  // Return false if the trueFalse array contains only trues.
  // If it contains even a single false, return false.
  if (trueFalse.includes(false)) {
    return false;
  } else {
    return true;
  }
};

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
