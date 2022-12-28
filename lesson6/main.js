// AJAX - Asynchronous Javascript and XML



//// async
// setTimeout , setInterval


// setTimeout(() => { }, 1000)


// load () =>


//// Callback Hell

// console.log('Загрузка данных...');
// setTimeout(() => {
//     console.log('Запрос на сервер');
//     const product = {
//         name: 'Banan',
//         price: 25
//     }
//     setTimeout(() => {
//         product.order = 'ordered'
//         setTimeout(() => {
//             send(product)
//             setTimeout(() => {
//                 send(product)
//                 setTimeout(() => {
//                     send(product)
//                 }, 2000)
//                 setTimeout(() => {
//                     send(product)
//                 }, 2000)
//                 setTimeout(() => {
//                     send(product)
//                 }, 2000)
//                 setTimeout(() => {
//                     send(product)
//                 }, 2000)
//                 setTimeout(() => {
//                     send(product)
//                 }, 2000) setTimeout(() => {
//                     send(product)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)



// req.addEventListener('load',() => {

// })

// Promise 




// const request = new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();
//     req.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     req.setRequestHeader('Content-Type', 'application/json');
//     req.send()
//     req.addEventListener('load', () => {
//         resolve(req.response);
//         reject();
//     })
// })

// request.then((users) => {
//     return new Promise((resolve, reject) => {
//         console.log(users, 'users2');
//         resolve(JSON.parse(users))
//         reject()
//     })
// }).then((users) => {
//     return new Promise((resolve, reject) => {
//         console.log(users,'users3');
//         resolve(users)
//         reject()
//     })
// }).then((users) => {
//     users.forEach(user => {
//         console.log(user.name,'userName');
//     });
// })


// request.catch(() => {
//     console.log('Error');
// })


// request.finally(() => {
//     setTimeout(() => {
//         console.log('Запрос остановлен');
//     },4000)
// })




/// fetch запросы


fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((user) => user.json())
    .then((users) => users)
        .then((users) =>  users.forEach(user => {
            console.log(user.name);  
})).catch(() => {
        console.log('Error in fethch re');
}).finally(() => {
    setTimeout(() => {
        console.log('Запрос закончен');
    },2000)
})



const fetch2 = (url, data) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(data.method, url);
        req.setRequestHeader(data.headers.contentType, data.headers.contentValue);
        req.send()
        req.addEventListener('load', () => {
            resolve(req.response);           
            reject();
        })
    })
}
const data = {
    method: 'GET',
    headers: {
        contentType: 'Content-Type',
        contentValue: 'application/json'
    }
}
fetch2('https://jsonplaceholder.typicode.com/users', data).then((users) => console.log(users, 'fetch2'))