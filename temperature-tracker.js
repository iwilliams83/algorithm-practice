// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor(){
    this.temps = []
  }

  insert(temperature) {
    this.temps.push(temperature)
  }

  getMax() {
    let max = 0
    this.temps.forEach(item => {
      if(item > max){
        max = item
      }
    })
    return max;
  }

  getMin() {
    let min = 110
    this.temps.forEach(item => {
      if(item < min){
        min = item
      }
    })
    return min;
  }

  getMean() {
   let sum = this.temps.reduce((total, item) => {
      return total += item
    }, 0)

    return sum/this.temps.length
  }

  getMode() {
    let counts = {}
    this.temps.forEach(item => {
      if(!counts[item]){
        counts[item] = 1
      }
      else {
        counts[item] += 1
      }
    })

    let mode
    let mostFrequent = 0

    Object.keys(counts).forEach(item => {
      if(counts[item] > mostFrequent){
        mostFrequent = counts[item]
        mode = item
      }
    })

    return +mode
  }
}






// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
