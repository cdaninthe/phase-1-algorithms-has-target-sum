function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0; i < array.length; i++){
    for (let j=i+1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here

  iterate through my array: for loop
  iterate a second time through my array: for loop
  compare sum with target value:
  if sum = target then function returns true
  else function returns false

*/

/*
  Add written explanation of your solution here

  I need to check if the sum of any 2 numbers in an array is equal to the target number
  I need to loop through each element of the array, and loop through a second time to add a second element in the array to see if the sum of those 2 elements is equal the target number

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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, -10, 15, 20], 5));
}

module.exports = hasTargetSum;

