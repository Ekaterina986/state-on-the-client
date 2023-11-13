const userId = localStorage.getItem('user_id');
if (userId) {
    showUserId(userId);
} else {
    showForm();
}

function showUserId(userId) {
    const welcome = document.getElementById('welcome');
    welcome.classList.add('welcome_active');
    document.getElementById('user_id').textContent = userId;
}

function showForm() {
    const signinObj = document.getElementById('signin');
    signinObj.classList.add('signin_active');

    const form = document.getElementById('signin__form');
    const button = document.getElementById('signin__btn');
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        form.login.value = form.login.value.trim();
        form.password.value = form.password.value.trim();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.onload = function() {
            const responseJson = JSON.parse(xhr.response);
            if (responseJson['success'] && responseJson['user_id']) {
                localStorage.setItem('user_id', responseJson['user_id']);
                showUserId(responseJson['user_id']);
                hideForm();
            } else {
                console.log('ошибка');
            }
        }
        const formData = new FormData(form);
        xhr.send(formData);
    })
}

function hideForm() {
    const signinObj = document.getElementById('signin');
    signinObj.classList.remove('signin_active');
}
