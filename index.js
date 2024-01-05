function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 1. I need to find a way of targetting the first number
 2. Also, target the second number
 3. Then,check wwhether the first number and the second are equal
 4.If equal, return true
 5.If not equal, return false

*/

/*
  Add written explanation of your solution here
  1.I iterate through the loop by starting from the first index.
  2. Inside the first loop, i iterate to chech the second number. Notice that i have not started from index 0, this is in a bide to make sure that I have not taken the first number twice. so it is accounted for by "i + 1". 
  3. After getting the two numbers, check whether their sum is equal to the target that we have been given. 
  If there are two numbers that add up to the target, return true. If not, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
