//const b1 = Array.from(document.querySelectorAll('button'));
const b1 = document.querySelector('.add')
const b2 = document.querySelector('.add-and-roll')
const b3 = document.querySelector('.roll-and-keep')

console.log(b1)
console.log(b2)
console.log(b3)
//console.log(buttons)
//buttons.forEach(button => console.log(button));

const pool = document.querySelector('.counter');
const result = document.querySelector('.result')

console.log(result)

//Add one to pool
b1.addEventListener(
    'click',
    () => (pool.innerHTML = Number.parseInt(pool.innerHTML) + 1)
)

//Add one to pool and roll pool
//need to roll into array pls ty
b2.addEventListener(
    'click',
    () => {
        (pool.innerHTML = Number.parseInt(pool.innerHTML) + 1)
            (result.innerHTML = Math.floor(Math.random() * 7))
    }
)
