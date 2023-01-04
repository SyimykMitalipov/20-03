

const button = document.querySelector('#button');


const wrapper = document.querySelector(".wrapper");


const getData = (url) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((data) => data.json())
        .then((res) => showData(res))
        .catch(() => {
            console.log('Error with Request');
        })
}

const showData = (content) => {
    content.forEach(element => {
        const block = document.createElement('div');
        block.style = `
            width: 200px;
            border: 1px solid green
        `
        block.innerHTML = `
        <div class=''>
        <h2 class='h2'>
         ${element.title}
         </h2>
        </div>
        `
        wrapper.append(block)
    })
}






const forms = document.querySelectorAll("form");


forms.forEach((form) => postData(form));


function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        })
        try {
            fetch('http://localhost:3000/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
        } catch {
            console.log("error");
        } finally {
            console.log('End');
        }
    })
}






// async and await   try and catch 

const getData2 = async (url) => {
    try {
        const response = await fetch(url, { method: 'GET', })
        const result = await response.json();
        showData(result)
    } catch {
        console.log('Error');
    } finally {
        console.log('Response was end');
    }
}



button.addEventListener('click', () => getData2('http://localhost:3000/menu'));