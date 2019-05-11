function countDown(num){
    // base case
    if(num<=0){
        return console.log('All done');
    }
    console.log(num);
    num--
    // caller
    countDown(num)
}

countDown(4)