// accepts a sorted array of int
// return first pair where the sum is 0
// both values must include
// if nothing found return undefined

// O(n^2)
function sumZero(arr){
    for(i=0;i<arr.length;i++){
        for(j=i+1;i<arr.length-1;j++){
            if(arr[i]+arr[j]===0) return [arr[i],arr[j]]
        }
    }
    return false
}

// time: O(n) space:O(1)
function sumZero(arr) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]];
        } 
        // move left pointer up
        else if (sum < 0) {
            left++;
        } 
        // move right pointer down
        else if (sum > 0) {
            right--;
        }
    }
}