let grid = [
[ 8,9,5,   7,4,2,   1,3,6 ],
[ 2,7,1,   9,6,3,   4,8,5 ],
[ 4,6,3,   5,8,1,   7,9,2 ],

[ 9,3,4,   6,1,7,   2,5,8 ],
[ 5,1,7,   2,3,8,   9,6,4 ],
[ 6,8,2,   4,5,9,   3,7,1 ],

[ 1,5,9,   8,7,4,   6,2,3 ],
[ 7,4,6,   3,2,5,   8,1,9 ],
[ 3,2,8,   1,9,6,   5,4,7 ]];
//Task 1
function getRow(grid,rowIdx){
 return grid[rowIdx];
}
console.log(getRow(grid,7));

//TASK 2
function getColumn(grid,colIdx){
    let arr = [];
    for(let i = 0;i<grid.length;i++){
        let element = grid[i];
        arr.push(element[colIdx]);
}return arr;
    }
    
console.log(getColumn(grid,2));

//TASK 3
//
function getSection(grid,x,y){
    
    x = x * 3;
    y = y * 3;
let arr = [];
    for(let i =x;i<x+3;i++){
        for(let j = y;j<y+3;j++){
       
        arr.push(grid[j][i]);

   }  
    }
    return arr;
}
console.log(getSection(grid,0,1));

//TASK3
//We now have functions that accept a sudoku grid and return specific subsections (row, column, or subgrid).

//Now we need to write a function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats). Write a function includes1to9 that accomplishes this.

function includes1to9(arr){
for(let i=1;i<arr.length;i++){
    // if(arr.length>=10) return false;
    if(arr.indexOf(i) === -1) return false; //check that it includes the numbers 1-9 (with no repeats).
}
return true;
}
console.log(includes1to9([1,2,3,4,5,6,7,8,10]));

// FINAL TASK
//With that function, you have all the parts you need to write your sudoku checker function.
function sudokuIsValid(grid){
    let resultArr = [];
    for(let i =0;i<9;i++){
        resultArr.push(getRow(grid,i));
        resultArr.push(getColumn(grid,i));
    }
    for(let i =0;i<3;i++){
        for(let j=0;j<3;j++){
            resultArr.push(getSection(grid,i,j));
        }
    }
    for(let i=0;i<resultArr.length;i++){
        if(!includes1to9(resultArr[i])) return false;
    }
    return true;
}
console.log(sudokuIsValid(grid));