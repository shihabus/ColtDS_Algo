//1
function freqBuilder(str) {
    let temp = {}
    for (let val of str) {
        temp[val] = temp[val] ? temp[val] + 1 : 1
    }
    return temp
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    let hashStr1 = freqBuilder(str1);
    let hashStr2 = freqBuilder(str2);
    for (let key in hashStr1) {
        if (hashStr2[key] !== hashStr1[key]) {
            return false
        }
    }
    return true
}

//2
function validAnagram(first,second){
    if(first.length!==second.length) return false

    const lookup={}
    for(let char of first){
        lookup[char]? lookup[char]++ : lookup[char]=1
    }

    for(let char of second){
        if(!lookup[char]) return false
        else{
            lookup[char]--
        }
    }
    return true
}