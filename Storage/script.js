

const scriptURL = 'https://script.google.com/macros/s/AKfycbz83oP_EbSLW_wpHsTGh8Cj2geW_MIfXZelssya-WednxiI7CXKZlccu-9hakNvfEP3Pw/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    const nameval = document.querySelector('#input1').value;
    const objectval = document.querySelector('#input2').value;
    const messageval = document.querySelector('#input3').value;
    let result = window.confirm("Are you sure to send this message !Warning: this message might be storaged forever! (your message:" + "  Name: '" + nameval + "';" + " Object: '" + objectval + "';" + " Message: '" + messageval + "';)");
    console.log(result);
    if (result == true){
        e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("your message is sent at: " + new Date() ))
            .catch(error => console.error('Error!', error.message))
    } else {
        console.log('ok. remember you can always check');
    }
    

    })
