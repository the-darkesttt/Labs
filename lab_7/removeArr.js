const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6); 
console.log(array1);

function removeElement (arr, n){
    const index = arr.indexOf(n);
        arr.splice(index, 1);
}

function removeElements (arr, ...i){
    for (const s of i) {
        const index = arr.indexOf(s);
            arr.splice(index, 1);
    }
}