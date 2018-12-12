//Given two sorted arrays, merge in ascending order
//This is pretty much how a merge sort works

let myArray = [3, 4, 6, 10, 11, 15];
let alicesArray = [1, 5, 8, 12, 14, 19];

function mergeArrays(first, second){

  let merged = []

  let i = 0; //first index
  let j = 0; //second index

  while(i < first.length && j < second.length){
    if(first[i] < second[j]){
      merged.push(first[i])
      i++
    }
    else if(first[i] > second[j]){
      merged.push(second[j])
      j++
    }
  }
  if(first[i]){
    merged = [...merged, ...first.slice(i)]
  }
  else if(second[j]){
    merged = [...merged, ...second.slice(j)]
  }

  return merged
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
