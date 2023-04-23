//create a result variable
let result = document.getElementById("answer").value;

// //function to add answer
// const addAnswer = (numb) => {

//     result += numb;
    
//     //update the answer on the screen
//     document.getElementById("answer").value = answer;
// };


function addAnswer(numb) {
    result += numb;
    //update the result to the screen
    document.getElementById("answer").value = result;
}


//function to calculate
function calculate() {
    result = eval(result);
    document.getElementById("answer").value = numbwithcomas(result);

}

//function to delete
function deleteButton () {
result = result.slice(0, result.length -1);
document.getElementById("answer").value = result;

}

//function to clear all
function clearAll() {
    result = "";
    document.getElementById("answer").value ='';
}

//function to add coma to result
function numbwithcomas(x) {
    //add a thousand separator to result

    return x.toLocaleString("en-US", { 
        useGrouping: true,
        groupingSeparator: ',' || '.',
    });

}