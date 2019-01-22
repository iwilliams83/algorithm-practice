/*
Write a function that takes an input string and a character set and returns
the minimum-length substring which contains every letter of the character set
at least once, in any order.

If you don't find a match, return an empty string.

Example:
input1 = "aabbcb"
alphabet1 = new Set(['a', 'b', 'c'])
Output => "abbc"
*/
input1 = "aabbcb"
alphabet1 = new Set(['a', 'b', 'c'])
//Output = "abbc"

input2 = "aaaaaaaaaabbbbbbbbccccccccsbabbbccc"
alphabet2 = new Set(['a', 'b', 'c'])
//Output = "csba"

input3 = "aaaaaaaaaabbbbbbbbccccccccsbabbbccc"
alphabet3 = new Set(['a', 'b', 'c', 'f'])
//Output = ""


function findSubstring(str, chars) {
  let smallestSub = ''
  let stringSet = new Set(str)

  for (let item of chars) {
    if (!stringSet.has(item)) {
      return ""
    }
  }

  for (let i = 0; i < str.length - 1; i++) {
    let sub = str[i]
    for (let j = i + 1; j < str.length; j++) {
      sub += str[j]
      if (checkString(sub, chars)) {
        if(smallestSub === '' || sub.length < smallestSub.length){
          smallestSub = sub
        }
      }
    }
  }
  return smallestSub
}

function checkString(str, chars) {
  let stringSet = new Set(str)
  for (let item of chars) {
    if (!stringSet.has(item)) {
      return false
    }
  }
  return true
}

console.log(findSubstring(input1, alphabet1))
console.log(findSubstring(input2, alphabet2))
console.log(findSubstring(input3, alphabet3))
