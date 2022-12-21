///// JSON   


// const obj = {
//     age: 20
// }


// const user1  = {
//     name: 'Ilgiz'
// }
// console.log(obj.age);
// console.log(obj['age']);

// const obj2 = JSON.stringify(obj)
// console.log(obj2);
// console.log(JSON.parse(obj2));





////// AJAX

/// XML Request



const submit = document.querySelector("#button");
const name = document.querySelector('#name');
const age = document.querySelector('#age');




submit.addEventListener('click',() => {
    const req = new XMLHttpRequest(); /// создание запроса
    req.open('GET','data.json'); /// добавление метода и пути ( или ссылка )
    req.setRequestHeader('Content-Type','application/json') ///// передача доп информации

    req.send();
    console.log(req.response,'response');
    req.addEventListener('load',() => {
        console.log(req.response,'response');
        const data = JSON.parse(req.response)
        console.log(data,'respomse from server');
        name.innerHTML = data.name;
        age.innerHTML = data.age;
    })
})



//// string, undefined, number Примитивные типы данных

// Object 




// let str = 'S';
// let str2 = str;

// console.log(str);
// console.log(str2);
// console.log(str === str2);



// let num1 = 2;
// let num2 = num1;

// console.log(num1);
// console.log(num2);
// console.log(num1 === num2);

// [
//     0: {dfdsfcdsaf},
//     1: 'fdfdfdfd',

// ]



/// objects

const obj1 = { /// 57
    age: 18,
    name: 'sss'
}

// const obj2 = {  /// 58
//     age: 18
// }


const obj3 = obj1; /// передается адрес объекта

obj3.age = 20



console.log(obj3  ,'obj1');

console.log(obj3 , 'obj3');

// console.log(obj3 === obj1);

// console.log(obj1 === obj2);



//// spread operator

const obj4 = {...obj1};
obj4.age = 44;
console.log(obj4,'obj4');