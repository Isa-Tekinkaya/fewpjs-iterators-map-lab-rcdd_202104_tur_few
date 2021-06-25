const tutorials = [
  'what does the this keyword mean?', 
  'What is the Contutorialuctor OO pattern?', 
  'implementing Blockchain Web API', 
  'The Test Driven Development Workflow', 
  'What is NaN and how Can we Check for it', 
  'What is the difference between stopPropagation and preventDefault?', 
  'Immutable State and Pure Functions', 
  'what is the difference between == and ===?', 
  'what is the difference between event capturing and bubbling?', 
  'what is JSONP?'
];

function titleCased(sentences){ 
  
  let wordsArray = sentences.map(arr =>{
  let words = arr.split(" ")
  
  return words.map(word =>{
  
  let firstLetter = word[0].toUpperCase()
  let rest = word.slice(1).toLowerCase()
  
  return `${firstLetter}${rest}`
  }).join(" ")
  
  
  
  })
  return wordsArray
}
titleCased(tutorials)