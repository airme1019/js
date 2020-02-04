const insertionSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
            console.log(array)
        }
    }
    return array;
};
console.log(insertionSort([4,2,6,11,2,10]))
