const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) dc heroes marvel heroes wale array m include ho jyega par like a single element [marevl heroes m 3 element hai toh dc heroes ka array pura ek 4th element ban jyega marvel heroes m]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// here ... is spread operator[isme sare elements individual ban jate hai]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//flat m depth dena hota hai ki kitne no. of depth tak solve krna hai
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//bracket m diya chij puchta ki array ya nhi
console.log(Array.from("Hitesh"))//diye gye value ko array bana deta hai
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));