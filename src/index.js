//const b1 = Array.from(document.querySelectorAll('button'));
const b1 = document.querySelector('.add')
const b2 = document.querySelector('.add-and-roll')
const b3 = document.querySelector('.roll-and-keep')

const pool = document.querySelector('.pool');

const result = document.querySelector('.result')

//Add one to pool
const incrementPool = () => {
    pool.innerHTML = Number.parseInt(pool.innerHTML) + 1
    result.innerHTML = ""
}

//Roll dice equal to the current pool
const rollDie = () => {
    let arr = Array.from({ length: Number.parseInt(pool.innerHTML) }, () => Math.ceil(Math.random() * 6))
    result.innerHTML = arr.toString()
}

//When pool = 6, roll pool and reset
const resetPool = () => {
    if (pool.innerHTML >= 6) {
        rollDie()
        pool.innerHTML = 0
    }
}

b1.addEventListener(
    'click',
    () => {
        incrementPool()
        resetPool()
    }
)

b2.addEventListener(
    'click',
    () => {
        incrementPool()
        rollDie()
        resetPool()
    }
)

b3.addEventListener(
    'click',
    () => {
        rollDie()
    }
)
