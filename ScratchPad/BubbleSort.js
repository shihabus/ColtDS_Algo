function BubbleSort(list){
    
    // For each iteration the element to the end get sorted as required
    // So iterate only till Array.length-i in inner loop
    // O(n^2)

    for(let i=0;i<list.length-1;i++){
        for(let j=0;j<list.length-i;j++){
            if(list[j]<list[j+1]){
                bigger=list[j]
                list[j]=list[j+1]
                list[j+1]=bigger
            }
        }
    }
    return list
}

list=[3,2,6,22,-1,1,10,9,8]
console.log(BubbleSort(list)) 
