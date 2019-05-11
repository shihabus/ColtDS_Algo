function oddCollector(arr){
    let newArr=[]
    if(arr.length==0) return newArr

    if(arr[0]%2==0){
        newArr.push(arr[0])
    }

    newArr=newArr.concat(oddCollector(arr.slice(1)))
    return newArr
}

console.log(oddCollector([1,2,3,4,5])); 