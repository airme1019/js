var flipAndInvertImage = function(A) {
    return A.map(row=>row.reverse().map(el=>(1-el)))
};

A = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(A))
