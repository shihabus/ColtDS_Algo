// Write a function called same
// which accept two arrays
// returns true if every value in the has 
// it's corresponding value squared in the second array
// the frequency of values must be same

// O(n^2) navie approach
function same(arr1,arr2){
    if(arr1.length!==arr2.length) return false
    for(let num of arr1){
        let index=arr2.indexOf(num**2)
        if(index==-1){
            return false;
        }
        arr2.splice(index,1);
    }
    return true
}

// O(n) frequency counter approach
function same(arr1,arr2){
    if(arr1.length!==arr2.length) return false
    let freqArr1=freqBulder(arr1)
    let freqArr2=freqBulder(arr2)
    for(let key in freqArr1){
        // if(!freqArr2[key**2] && freqArr2[key**2]!==freqArr1[key]){
        //     return false
        // }
        if(!(key**2 in freqArr2) && freqArr2[key**2]!==freqArr1[key]){
            return false
        }
    }
    return true
}

same([1,2,3],[1,4,4])