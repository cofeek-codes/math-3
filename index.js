let out = document.querySelector('#out')

let [a, b, c] = document.querySelectorAll('input')

let btn = document.querySelector('#check')
let maxarr = [a, b, c].map(i => i.value)

const cmpsides = (bestInt, others) => {
  return Math.pow(bestInt, 2) == Math.pow(others[0], 2) + Math.pow(others[1], 2)
}

btn.addEventListener('click', count)

function count(maxarr) {
  let m = Math.max(maxarr)

  out.value = cmpsides(
    m,
    [a, b, c].filter(i => i !== m)
  )
}
