let words=["geeksquiz", "geeksforgeeks", "abcd","forgeeksgeeks", "zuiqkeegs"]
// create an individual sorted word Array, with actual word and sorted word
let individualWordsSorted=words.map(word=>[word,word.split('').sort().join('')])
individualWordsSorted

// sort the array of array wrt sorted word
let sortedWordArray=individualWordsSorted.sort((a,b)=>a[1]>b[1]?1:-1)
sortedWordArray
let result=[]

// if sorted word of two words matchMedia, they are anagram
for(let i=0;i<sortedWordArray.length-1;i++){
    if(sortedWordArray[i][1]==sortedWordArray[i+1][1]){
        result.push([sortedWordArray[i][0],sortedWordArray[i+1][0]])
    }
}
result
