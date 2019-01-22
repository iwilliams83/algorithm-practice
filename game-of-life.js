/*
Any live cell with fewer than two live neighbors dies, as if by underpopulation.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Ex: currentState = [[1,0,0], [0,1,0], [1,1,1]]
*/

let currentState = [[1,0,0], [0,1,0], [1,1,1]]

function gameOfLife(state){
  let newState = []
  for(let i = 0; i < state.length; i++){
    newState.push([])
    for(let j = 0; j < state[i].length; j++){
      let currentCell = state[i][j]
      let live = checkNeighbors(currentState, i, j)
      if(currentCell === 1 && live < 2){
        newState[i][j] = 0
      }
      else if(currentCell === 1 && (live === 2 || live === 3)){
        newState[i][j] = 1
      }
      else if(currentCell === 1 && live > 3){
        newState[i][j] = 0
      }
      else if(currentCell === 0 && live === 3){
        newState[i][j] = 1
      }
      else {
        newState[i][j] = state[i][j]
      }
    }
  }
  return newState
}

function checkNeighbors(currentState, i, j){
  let neighbors = [
    [i-1, j-1], [i-1, j], [i-1, j+1], [i, j+1],
    [i+1, j+1], [i+1, j], [i+1, j-1], [i, j-1]
    ]

  let liveCells = 0

  for(let n = 0; n < neighbors.length; n++){
    let x = neighbors[n][0]
    let y = neighbors[n][1]

    if(currentState[x] !== undefined && currentState[y] !== undefined){
      if(currentState[x][y] === 1){
        liveCells += 1
      }
    }
  }
  return liveCells
}

//checkNeighbors(currentState, 0, 2)

gameOfLife(currentState)
