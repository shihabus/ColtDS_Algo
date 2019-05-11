// helper function
// outter function
function oddCollector(arr){
    let result=[]

    // inner recursive function
    function oddCheck(arr_input){
        if(arr_input.length===0) return 

        popped=arr_input.pop()
        if(popped%2!==0){
            result.push(popped)
        }

        oddCheck(arr_input)
    }
    
    oddCheck(arr)
    console.log(result);
}

oddCollector([1,2,3,4,5,6])