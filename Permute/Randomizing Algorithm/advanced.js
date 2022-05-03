function permute (ar) { // need to change the length arrangement to a while loop waiting for the total possible # of 
  let results = [];

  for (let i=ar.length; i>0; i--){
    let newResults = [];
    console.time('while')
    while (newResults.length < possibilities(ar.length, i)) {
      
      newResults.push(randomize(ar, i));
      newResults = clearDupes(newResults);
    }
    console.timeEnd('while')
    
    results.push(...newResults)
  }

  return results;
}

function randomize (ar, lngth) { //randomizes array order
  let randomed = [];
  let tempAr = [...ar];
  while (randomed.length < lngth) {
    let randomIndex = Math.floor(Math.random()*tempAr.length);
    let randomChar = tempAr.splice(randomIndex, 1);
    randomed.push(...randomChar);
  }
  return randomed;
}

function arrMatch (ar1, ar2) {
  return ar1.length == ar2.length?
    ar1.every(el => ar2.includes(el)):
    false;
}

function clearDupes (ar) { //there is clear room for optimization
  return ar.filter((item, index) => { //filters duplicates
    return ar.findIndex(itm => arrMatch(itm, item)) == index;
  });
}

function possibilities (arrLength, length) { //given the array length and the length of the subarray, this function returns the number of possible combinations for an array of sublength 'length'
  return factorial(arrLength)/(factorial(length)*(factorial(arrLength - length)));
}

function factorial (num) {
  let result = 1;
  for (let i=num; i>0; i--){
    result *= i;
  }

  return result;
}

console.time()
// console.log(randomize([0,1,2,3], 3))
console.log(permute([0,1,2,3,4,5,6,7,8,9])) // 
console.timeEnd()
