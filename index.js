const passwordInput = document.getElementById('password-input')
const btn = document.getElementById('confirm-button')

function checkPassword() {
    if (passwordInput.value.length < 12) {
        alert('Your password has to be at least 12 characters')
    } else {
        alert('Your password has been set!')
        passwordInput.value = ''
        window.location.assign('https://www.youtube.com/watch?v=9FXSN6Y2pgY')
    }
}

btn.addEventListener('click', checkPassword)
passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword()
    }
})
