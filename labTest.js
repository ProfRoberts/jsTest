

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

//console.log(solution);

//Create a mulitplecation table

//Create a varible that will change
let result = 'x ';

for(let n1 = 0; n1 <= 10; n1++){
    
    //Create a number
    let num1 = n1;
    for(let n2 = 0; n2 <= 10; n2++){
        let num2 = n2;
        let solution = n1 * n2;

        if(n1 == 0 && n2 > 0){
            result += '[' + n2 + ']';
        }
        else if(n2 == 0 && n1 > 0){
            result += '[' + n1 + ']';
        }
        else if(n1 > 0 && n2 > 0){
            result += (solution) + ' ';
        }
        
    }
    result += '\n';
}

console.log(result);
