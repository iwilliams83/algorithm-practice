
function overlap(rec1, rec2){

  //find the max starting point (right-most starting point)
  let maxStartX = Math.max(rec1.x, rec2.x)

  //find the min end point (left-most end point)
  let rec1EndX = rec1.x + rec1.width
  let rec2EndX = rec2.x + rec2.width

  let minEndX = Math.min(rec1EndX, rec2EndX)

  //if max start is greater than or equal to min end, there is no overlap
  if(maxStartX >= minEndX){
    return false
  }

  //check max and min along y-axis
  let maxStartY = Math.max(rec1.y, rec2.y)

  let rec1EndY = rec1.y + rec1.height
  let rec2EndY = rec2.y + rec2.height

  let minEndY = Math.min(rec1EndY, rec2EndY)

  if(maxStartY >= minEndY){
    return false
  }

  //if you've made it this far (did not return early with false, there must be an overlap)
  return true

}

// Given x and y are top left corner of rectangle
const rec1 = {x: 0, y: 0, width: 5, height: 4}
const rec2 = {x: 3, y: 3, width: 4, height: 3}
const rec3 = {x: 4, y: 5, width: 3, height: 1}

console.log('rec1 & rec2 overlap? ', overlap(rec1,rec2)) //true
console.log('rec1 & rec3 overlap? ', overlap(rec1,rec3)) //false
