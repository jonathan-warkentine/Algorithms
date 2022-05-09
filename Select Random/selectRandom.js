// console.log(
//     selectRandom(['this', 'is', 'a', 'string', 'of', 'random', 'words'])
// );

// given an array, returns a random element within the array
function selectRandom (arr) {
    const randIndex = Math.floor(Math.random()*arr.length);
    return arr[randIndex];
}