// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) adds given no. at starting
// myArr.shift() deletes the no. of array from starting

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() converts array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //prints the given no. from the range leaving the last no. of range,ex= here it will print 1,2 ,,excluding 3[elements of main array will be same]

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//prints the no. from starting range to last range [the given no. of range will be removed from the main array ex, here main array will be 0 4 5 and given range no. will be removed and will be the output]
console.log("C ", myArr);
console.log(myn2);