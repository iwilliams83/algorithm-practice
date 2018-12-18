let memo = { 1: 0, 2: 1 }
function fib(n) {
  if (n === 1) {
    return memo[1]
  }
  else if (n === 2) {
    return memo[2]
  }
  else if (n > 2) {
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
  }
}

fib(5)
