


//// Регулярные выражение


// const str = 'AaaSssbbbzzzssddds'

// const reqExp = new RegExp('s','gi')


// console.log(str.match(reqExp));
// console.log(str.replace(reqExp, '*'));



//// new variant req exp

// const reqExp = /s/gi



// console.log(str.match(reqExp));



// validate number


// const nums = prompt('Введите цифры')

// const input = document.querySelector('#num');
// const button = document.querySelector('#submit')
// const result = document.querySelector('#result')


// const reqExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/gi

// const numExp = /\w/g
// console.log(numExp.test(nums));

// button.addEventListener('click',() => { 
//   // console.log(reqExp.test(input.value));
//   if (reqExp.test(input.value)) {
//     result.innerText = 'Success';
//     result.style.color = 'green'
//   }else {
//     result.innerText = 'Failed';
//     result.style.color = 'red'
//   }
// })






/// recursion


// for(let i = 0; i < 100;i++) {
//   console.log(i);
// }



let num = 0;
let filed = ''

// function rec1() {
//   num++
//   console.log(num);
//   if(num > 1000) return
//   rec1()
// }
// rec1()


//// rec 2
// function addNum() {
//   num++
//   filed += `${num}`
//   console.log(filed);
//   if(num >= 30) return
//   addNum()
// }
// addNum()




const people = {
  'John': {
    age: 45,
    parents: {
      "Fred": {
        age: 65,
        parents: {
          "Paren1": {
            age: 100,
            parents: {
              'ffdfdf': {

              },
              'fdsafd': {

              }
            }
          },
          "parent2": {
            age: 120
          }
        }
      },
      "Marry": {
        age: 64
      }
    }
  },
  "Sam": {
    age: 18,
    parents: {
      "Alex": {
        age: 40
      },
      "April": {
        age: 38
      }
    }
  }
}






function personList(obj) {
  for(let key in obj.parents) {
    personList(obj.parents[key]) 
  }
}

// console.log(people);

// people.John
// people["John"]


for(let key in people) {
  personList(people[key])
}




