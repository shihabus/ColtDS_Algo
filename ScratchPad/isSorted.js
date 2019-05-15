function issorted(list){
    for(let i=0;i<list.length-1;i++){
        if(list[i]>list[i+1]) return false
    }
    return true
}
list=[1,2,3,4,5,6]
console.log(issorted(list))