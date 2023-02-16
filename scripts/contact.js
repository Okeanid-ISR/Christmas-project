const form = document.getElementById("form")
const agree = document.getElementById("agree")
const mail = document.getElementById("mail")
const submit = document.getElementById("sign-up-button")
const user = document.getElementById("user")
const password = document.getElementById("password")

form.addEventListener('change', function (event) {
    event.preventDefault();
    if (agree.checked && user.value.length > 6 && mail.value.length > 6 && password.value.length > 6) {
        submit.style.opacity = "100%"
        submit.removeAttribute('disabled')
        submit.style.cursor = 'pointer'
    } else {
        submit.setAttribute('disabled', false)
        submit.style.cursor = 'not-allowed'
        submit.style.opacity = '70%'
    }
})