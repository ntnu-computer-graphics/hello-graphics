export function setupCounter(element) {
  let counter = 0
  let iteration = 0
  let increment = true
  let counterList = []
  const setCounter = (count) => {
    if (increment) {
      count += 2
    }
    else {
      count -= 2
    }

    if(iteration != 0) {
      if(iteration % 16 == 0) {
        let shortList = []
        counterList.forEach(c => {
          if(c % 6 == 0) {
            shortList.push(c)
          }
        })
        console.log(counterList)
        console.log(shortList)
      }
      if(iteration % 8 == 0) {
        increment = !increment
      }
  
      if (iteration % 5 == 0) {
        counter *= 2
      }
      else {
        counter = count
      }
    }

    iteration += 1

    counterList.push(counter)
        
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter))
  setCounter(0)
}
