someArray = [75, 100, 90, 150, 85, 200, 180]
//Target = 270 => 90 + 180

function findMovies(arr, target){
  let movieTimes
  let first
  let second
  let complements = new Set()


  for(let i = 0; i < arr.length; i++){
    let current = arr[i]

    if(complements.has(current)){
      return true
    }

    if(current < target){
      complements.add(target - current)
    }
  }
  return false
}

console.log(findMovies(someArray, 270)) //true
console.log(findMovies(someArray, 260)) //false
