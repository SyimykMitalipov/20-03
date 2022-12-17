



/// classList  DOM
const btns = document.querySelectorAll('.button')

// console.log(btns,'btns');
// const arr = [1,3,45]

// btns[1].classList.add('red');


// btns[0].classList.remove('red')


// btns.forEach((btn) => {
//     btn.classList.add('red')
// })






const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click',(event) => {
    if ( event.target.tagName == 'BUTTON') {
        if ( !event.target.classList.contains('red')) {
            event.target.classList.add('red')
        }else {
            event.target.classList.remove('red')
        }
    }
})



const btn2 = document.createElement('button');

wrapper.append(btn2)

/// Делигирование событий







