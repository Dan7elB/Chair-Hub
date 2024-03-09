const scriptURL = 'https://script.google.com/macros/s/AKfycbz83oP_EbSLW_wpHsTGh8Cj2geW_MIfXZelssya-WednxiI7CXKZlccu-9hakNvfEP3Pw/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    tempo = document.querySelector(".p");
    tempo.textContent = "your message is sent at " + new Date();

    e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .catch(error => console.error('Error!', error.message))
    })
