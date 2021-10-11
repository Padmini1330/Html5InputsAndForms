const text = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input', function() {
    let nameRegEx = RegExp('^[A-Z]{1}[a-zA-z]{2,}$')
    if(nameRegEx.test(text.value))
        textError.textContent = ""
    else
        textError.textContent = "Incorrect Name"
});

const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent=salary.value;
salary.addEventListener('input', function() {
    output.textContent=salary.value;
});

const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error')
email.addEventListener('input', function() {
    let emailRegEx = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z]+[.]?[a-zA-Z]+$')
    if(emailRegEx.test(email.value))
        emailError.textContent = ""
    else
        emailError.textContent = "Incorrect Email"
});

const phone = document.querySelector('#tel')
const phoneError = document.querySelector('.phone-error')
phone.addEventListener('input', function() {
    let phoneRegEx = RegExp('^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$')
    if(phoneRegEx.test(phone.value))
        phoneError.textContent = ""
    else
        phoneError.textContent = "Incorrect phone number"
});

const password = document.querySelector('#password')
const passwordError = document.querySelector('.password-error')
password.addEventListener('input', function() {
    let passwordRegEx = RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=[^!@_#$%^&+=]*[!@_#$%^&+=][^!@_#$%^&+=]*$)(?=.*[0-9]).{8,}$')
    if(passwordRegEx.test(password.value))
        passwordError.textContent = ""
    else
        passwordError.textContent = "Incorrect input"
});

