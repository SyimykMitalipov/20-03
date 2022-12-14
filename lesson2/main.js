// setTimeout 



// function getHello () {
//   console.log('Hello');
// }

// let num = 0;
// let time1 = setTimeout((param) => {
//     console.log(param);
// } ,2000,'1')

// let num = 0;
// function addNum () {
//    num++
//    if(num >= 30) return
//     console.log(num,'num');
//     addNum()
// }
// addNum()


// let id = setTimeout(() => {
//     console.log('1');
// },1000)




// let id2 = setTimeout(() => {
//     console.log('2');
// },2000)
// clearTimeout(id2)



// let num = 0;
// let inter = setInterval(addNum,1000)


// function addNum () {
//     if(num == 5) {
//         clearInterval(inter)
//     }
//     num++
//     console.log(num,'num');
// }






// setTimeout((param) => {
//     console.log(param);
// }, 4000, '2')

// setTimeout((param) => {
//     console.log(param);
// }, 1000, '3')

// setTimeout((param) => {
//     console.log(param);
// }, 5000, '4')



// clearTimeout()



// function moveBlock() {
//     let box = document.querySelector('.box');
//         pos = 0;
//     let id = setInterval(move,10)
//     function move () {
//         if(pos === 300) {
//             clearInterval(id)
//         }
//         pos++
//         // box.style.top = `${pos}px`;
//         box.style.left = `${pos}px`;
//     }
// }


// moveBlock()



//// Замыкания


// let count = 0;


// function fc1 (param) {
//     let num = param;
//     const fc2 = function(param2) {
//         param2 += num
//         console.log(param2,'num2');
//     }
//     return fc2
// }



// function multiply (a,b) {
//     return a + b
// }


// let sum = multiply(1,3)
// console.log(sum);



// let increment = fc1(2) 

// let sun1 = increment(10)
// let sum2 = increment(12)
// let sum3 = increment(9)



const people = {
    Sam: {
        age: 18,
        parents: {
            parent1: {
                age: 343,
                parents: {
                    paren11: {
                        age: 121232
                    },
                    parent12: {
                        age:343
                    }
                }

            },
            parent2: {
                age: 33
            }
        }
},
Alex: {
    age: 20,
    parents: {
        parent3: {
            age: 233
        },
        parent4: {
            age:2343
        }
    }}
}



function getParent(obj) {
    for(let person in obj.parents) {
        console.log(person);
        getParent(obj.parents[person])
    }
}


for (let person in people) {
    getParent(people[person])
}

