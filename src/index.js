//const b1 = Array.from(document.querySelectorAll('button'));
const b1 = document.querySelector('.add')
const b2 = document.querySelector('.add-and-roll')
const b3 = document.querySelector('.roll-and-keep')

const pool = document.querySelector('.counter');

const result = document.querySelectorAll('.result')


// (result.innerHTML = Math.ceil(Math.random() * 6))

//Add one to pool
b1.addEventListener(
    'click',
    () => (pool.innerHTML = Number.parseInt(pool.innerHTML) + 1)
)

// Add one to pool and roll pool
// need to roll into array pls ty
b2.addEventListener(
    'click',
    () => {
        pool.innerHTML = Number.parseInt(pool.innerHTML) + 1

        let arr = Array.from({ length: Number.parseInt(pool.innerHTML) }, () => Math.ceil(Math.random() * 6));

        result.innerHTML = JSON.stringify(arr)
    }
)
