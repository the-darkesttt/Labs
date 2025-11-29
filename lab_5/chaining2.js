const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 

function array() {
    const data = []; 
    const func = function(index) {
        return data[index];
    };
    func.push = function(value) {
        data.push(value);
    };
    func.pop = function() {
        return data.pop();
    };
    return func;
}
