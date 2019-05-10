let words=["cat", "dog", "tac", "god", "act"]
let sorted=words
.map(word=>[word,word.split('').sort().join('')]) // create an with word and individual sort word
.sort((a,b)=>a[1]>b[1]?1:-1) //sort the array of arrays wrt individual sorted words
.map(item=>item[0]).join(' ') // join the first words to form the result
sorted