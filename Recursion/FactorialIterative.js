function factorial(num){
    let fact=1
    while(num>0){
        fact*=num
        num--
    }
    return fact
}

factorial(5)