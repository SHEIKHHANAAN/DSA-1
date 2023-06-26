////////////////////////
// EXAMPLE 1
////////////////////////
function moveZeroes(nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2);

////////////////////////
//EXAMPLE 2
////////////////////////

function firstUniqChar(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
