/*
Write a function that returns true or false as to whether or not a given
array matches a given string pattern

function samePattern(arr, str){

}

samePattern(["to be", "or not", "to be"], "aba")
  => should return true
*/

function samePattern(arr, str){
  if(arr.length !== str.length) return false

  let pattern = str.split('')

  let alreadySeen = {}
  let stringSet = new Set()

  for(let i = 0; i < pattern.length; i++){
    let current = pattern[i] //a
    if (!alreadySeen[current]){
      alreadySeen[current] = arr[i] //{a: "to be"}
      if (stringSet.has(arr[i])){
        return false
      }
      stringSet.add(arr[i])
    }
    else if (alreadySeen[current]){
      if(alreadySeen[current] !== arr[i]){
        return false
      }
    }
  }
  return true
}

samePattern(["to be", "or not", "to be"], "aba")
//true
samePattern(["to be", "or not", "to be"], "abc")
//false
