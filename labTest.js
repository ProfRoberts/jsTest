

function rSum(var1, var2){

    //Sum of two numbers
    let solution = var1 + var2;

    return solution;
}

//Second function 
function determineNumber(var1, var2){
    let whatNumber = rSum(var1, var2)
    let solution = 0
    if(whatNumber >= 50 && whatNumber <= 80){
        solution = 65;

    }
    else{
        solution = 80; 
    }
    return solution;
}

let solution = determineNumber(25, 57)

console.log(solution);