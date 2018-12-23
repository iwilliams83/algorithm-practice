let str = "abcba" //true
let str2 = "abcda" //false
let str3 = "adadb" //true
let str4 = "abcabcbd" //false
let empty = '' //false

function palindrome(s){
  if(s.length === 0) return false

  let letters = new Set()
  for(let i = 0; i < s.length; i++){
    let current = s[i]
    if(!letters.has(current)){
      letters.add(current)
    }
    else if(letters.has(current)) {
      letters.delete(current)
    }
  }

  if(str.length % 2 === 0 && letters.size === 0){
    return true
  }
  else if(str.length % 2 > 0 && letters.size === 1){
    return true
  }

  return false
}

console.log(palindrome(str))
console.log(palindrome(str2))
console.log(palindrome(str3))
console.log(palindrome(str4))
console.log(palindrome(empty))
