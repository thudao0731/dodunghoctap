let formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    let Usename = document.getElementById('Usename').value;
    let Password = document.getElementById('Password').value;

    // Usename and Password validation
    if (Usename === '' && Password === '') {
        alert('Tên tài khoản và mật khẩu không được để trống');
    } else if (Usename === '') {
        alert('Tên tài khoản không được để trống');
    } else if (Password === '') {
        alert('Mật khẩu không được để trống');
    } else {
        window.location.href = 'index.html'
    }
});
