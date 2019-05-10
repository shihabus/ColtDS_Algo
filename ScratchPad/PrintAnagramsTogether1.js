
// input string
let words=["cat", "dog", "tac", "god", "act"]
// create a hashmap of individually sorted words and their index
let sortedWords=words.map((word,index)=>{
    return {word:word.split('').sort().join(''),index}
})
sortedWords

// sort the overall object wrt to words, so we have all anagrams together
let anagrams=sortedWords.sort((a,b)=>{
    return a.word>b.word?1:-1
})
anagrams

// get the index from sorted anagrams and print the corresponding value from words at that index
result=anagrams.map(item=>{
    console.log(item.index)
    return words[item.index]
})
result