const som = document.querySelector('#som');
const usd = document.querySelector('#usd');










/// DRY  - don't repeat your self




function convertor(elem, target) {
    elem.addEventListener('input', (event) => {
        const request = new XMLHttpRequest(); // создание запроса
        request.open('GET', 'data.json');
        request.setRequestHeader('Content-Type', 'application/json');

        request.send();

        request.addEventListener('load', () => {
            const response = JSON.parse(request.response);
        event.target.name === 'som' ?
                target.value = (elem.value / response.usd).toFixed()
            :
                target.value = (elem.value * response.usd).toFixed()       
            
            elem.value == '' && (target.value = '') 

        })
        
    })
}


convertor(som, usd)
convertor(usd, som)




/// https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR