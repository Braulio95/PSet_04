/*Problem 2 
Create a class called 'Matrix' containing a constructor that initializes the number of rows and number of columns of a new Matrix object.

The Matrix class has the following properties:

number of rows of the matrix
number of columns of the matrix
elements of the matrix in the form of a 2D array
The Matrix class has methods for each of the following:

get the number of rows
get the number of columns
set the elements of the matrix at the given position (i,j)
add two matrices. If the matrices cannot be added log, "NOOP"
multiplying the two matrices*/

class Matrix {
    rows: number;
    columns: number;
    matrix: number[][];
  
    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = new Array(this.rows);
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = new Array(this.columns);
        }
        for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j]=0;
            }
        }
    }
  
    setValue(row: number, column: number, value: number) {
        if (row < this.rows && column < this.columns) {
            this.matrix[row][column] = value;
        }
    }
    setRandomValues() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let randomnum = Math.random() * 10;
                this.matrix[i][j] = Math.trunc(randomnum);
            }
          }
      }
  
    addMatrix(otherMatrix: Matrix): Matrix | null{
        if (this.rows !== otherMatrix.rows || this.columns !== otherMatrix.columns) {
            console.log("NOOP");
            return null
        }else{
            const newMatrix = new Matrix(this.rows, this.columns);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    newMatrix.matrix[i][j] = this.matrix[i][j] + otherMatrix.matrix[i][j];
                }
            }
                return newMatrix;
            }
        }
    multMatrix(otherMatrix: Matrix): Matrix | null{
        if (this.columns !== otherMatrix.rows) {
          console.log("NOOP");
          return null
        }else{
            const newMatrix = new Matrix(this.rows, otherMatrix.columns);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < otherMatrix.columns; j++) {
                    let sum = 0;
                    for (let k = 0; k < this.columns; k++) {
                        sum += this.matrix[i][k] * otherMatrix.matrix[k][j];
                    }
                newMatrix.matrix[i][j] = sum;
                }

            }
            return newMatrix;
        }
  }
}

const myMatrix = new Matrix(3, 4);
myMatrix.setRandomValues();
console.log(myMatrix)
  
const anotherMatrix = new Matrix (3, 4);
anotherMatrix.setRandomValues();
console.log(anotherMatrix);

myMatrix.addMatrix(anotherMatrix);