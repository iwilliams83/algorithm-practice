// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor(){
    this.temps = []
    this.max = 0
    this.min = 110
    this.total = 0
    this.counts = {}
    this.mode = 0
  }

  insert(temperature) {
    this.temps.push(temperature)
    this.max = Math.max(temperature, this.max)
    this.min = Math.min(temperature, this.min)
    this.total += temperature

    if(!this.counts[temperature]){
      this.counts[temperature] = 1
    }
    else {
      this.counts[temperature] += 1
    }

    let mostFrequent = 0

    Object.keys(this.counts).forEach(item => {
      if(this.counts[item] > mostFrequent){
        mostFrequent = this.counts[item]
        this.mode = item
      }
    })

  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.total/this.temps.length
  }

  getMode() {
    return +this.mode // '+' is the same as parseInt
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
