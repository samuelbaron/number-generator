const minimal = document.querySelector(".minimal")
const maximal = document.querySelector(".maximal")
let minimalValue = ""
let maximalValue = ""
let result = ""

const print = () => {
  if ( isNaN(result)) {
    return 0
  }
  else {
    let resultParagraph = document.querySelector(".result-number")
    resultParagraph.innerHTML = result
  }
}

const generate = () => {
  if (isNaN(minimalValue) || (isNaN(maximalValue)) ) return
  const min = parseInt(minimalValue)
  const max = parseInt(maximalValue)
  if (max < min) {
    alert("Maximal number must be greater than a minimal one")
    return
  }
  result = (Math.floor(Math.random() * ( max - min + 1 ) + min ))
  print()
}

minimal.addEventListener("keyup", () => {
  let value = minimal.value
  if ( value !== minimalValue )  {
    minimalValue = minimal.value
    generate()
  }
})
maximal.addEventListener("keyup", () => {
  let value = maximal.value
  if ( value !== maximalValue )  {
    maximalValue = value
    generate()
  }
})
