class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric on the left
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }

    // Skip non-alphanumeric on the right
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
    }
}
