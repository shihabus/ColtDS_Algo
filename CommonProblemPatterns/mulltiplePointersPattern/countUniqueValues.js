// O(n)

function countUniqueValues(arr){
    if(arr.length===0) return 0
    var i=0;
    for(let j=i;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    return i+1
}

// =====
function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let tail = 0,
        head = 1,
        uniqueCount = 1;
        arr.length
        while(head<arr.length){
            if(arr[tail]!==arr[head]){
                uniqueCount++
            }
            head++
            tail++
        }
        return uniqueCount
}

// =====
function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let uniqueCount = 1;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]!==arr[i+1]){
                uniqueCount++
            }
        }
        return uniqueCount
}
