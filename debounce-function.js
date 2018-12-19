
function debounce(cb, wait){
  //"wait" is the time to wait before executing the cb
  //cb is the search function to be executed

  //Keep track of time between function calls
  let timeNow
  let lastTime
  //Need ID for the setTimeout (to clear it later on)
  let id

  //Each time debounce is called, it should reset the time if its called again
  //within the "wait" window
  return function(){
    timeNow = Date.now()
      //if its not called again within wait window, then execute cb()
    if (lastTime && ((timeNow - lastTime) < wait)){
      clearTimeout(id)
    }

    id = setTimeout(cb, wait)
    lastTime = Date.now()
  }
}

//Test:
let a = () => console.log('Taco')
let b = debounce(a, 100)
b()
b()
b() // only this call should invoke a()
