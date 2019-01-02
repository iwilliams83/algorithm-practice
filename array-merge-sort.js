function mergeSort(array) {
  if(array.length === 0) return []
	let sorted = []
  let max = Math.max(array[0], array[1])
  let min = Math.min(array[0], array[1])
  let nums = {}

  for(let i = 0; i < array.length; i++){
    let current = array[i]

    if(!nums[current]){
      nums[current] = 1
    }
    else if(nums[current]){
      nums[current] += 1
    }

    if(current < min){
      min = current
    }
    else if(current > max){
      max = current
    }
  }

  for(let j = min; j <= max; j++){
    if(nums[j]){
      if(nums[j] > 1){
        for(let k = 1; k <= nums[j]; k++){
          sorted.push(j)
        }
      }
      else {
        sorted.push(j)
      }
    }
  }
return sorted
}

let arr = [8, 5, 2, 9, 5, 3, 6]

console.log(mergeSort([9, 3, 6, 7, 2, 1, 5, 3, 8]))
