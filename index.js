// add solution here
function theBeatlesPlay(musicians, instruments){
  const array = []
  for(let i=0; i< musicians.length; ++i){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  for(let i=0; i< facts.length; ++i){
    console.log(facts[i] + " !!!")
  }
  //return facts
}