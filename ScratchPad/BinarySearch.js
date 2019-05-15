list = [1, 2, 3, 4, 5, 6]
item = 6

function BinarySearch(item, list) {
    let listSize=list.length-1,
    lower=0,
    upper=listSize

    while(lower <= upper){
        mid=Math.floor((lower+upper)/2)

        if(item===list[mid]) return mid
        if(item<list[mid]) upper=mid-1
        if(item>list[mid]) lower=mid+1
    }
    return false
}
BinarySearch(item, list)
