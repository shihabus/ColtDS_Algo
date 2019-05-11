// O(n^2)

function maxSubArraySum(arr,num){
    if(num > arr.length) return null
    let sum=[]
    for(i=0;i<=arr.length-num;i++){
        let temp=0
        for(j=i;j<i+num;j++){
            temp+=arr[j]
        }
        sum.push(temp)
    }
    return Math.max(...sum)
}

//O(n)
function maxSubArraySum(arr,num){
    if(num>arr.length) return null
    let maxSum=[],
        tempSum=0
    for(let i=0;i<num;i++){
        tempSum+=arr[i]
    }
    maxSum.push(tempSum)
    for(let i=num;i<arr.length;i++){
        tempSum=tempSum-arr[i-num]+arr[i]
        maxSum.push(tempSum)
    }
    return Math.max(...maxSum)
}