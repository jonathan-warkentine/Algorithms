function permute (ar, depth) { 
  let results;

  let lengths = [];
  for (let i=0; i<depth; i++){
    lengths.push(Math.floor(Math.random()*ar.length+1));
  }

  results = lengths.map(lngth => randomize(ar, lngth, depth)).flat();
  
  return clearDupes(results);
}

function randomize (ar, lngth, depth) { //randomizes array order
    
  let randomed = [];
  
  for (let i=0; i<depth; i++){
    let tempAr = [...ar];
    randomed[i] = [];
    while (randomed[i].length < lngth){
      randomed[i].push(tempAr.splice(Math.floor(Math.random()*tempAr.length), 1));
    }
  }
  return clearDupes(randomed.map(arr => arr.flat()));
}

function arrMatch (ar1, ar2) {
  return ar1.length == ar2.length?
    ar1.every(el => ar2.includes(el)):
    false;
}

function clearDupes (ar) {
  return ar.filter((item, index) => { //filters duplicates
    return ar.findIndex(itm => arrMatch(itm, item)) == index;
  });
}

console.time()
console.log(permute([0,1,2,3,4,5,6,7,8,9], 250))
console.timeEnd()