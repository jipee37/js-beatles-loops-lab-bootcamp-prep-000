// add solution here
function theBeatlesPlay(musicians, instruments){
  const array = []
  for(let i=0; i< musicians.length; ++i){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  const newFacts = []
  for(let i=0; i< facts.length; ++i){
    newFacts.push(facts[i] + " !!!")
  }
  return newFacts
}
