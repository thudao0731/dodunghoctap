let formRegister = document.getElementById('formRegister');

formRegister.addEventListener('submit', function(e) {
    e.preventDefault();

    let Usename = document.getElementById('Username').value;
    let Password = document.getElementById('Password').value;
    let Phone = document.getElementById('Phone').value;

    // Usename and Password validation
    if (Usename === '' && Password === '' && Phone === '') {
        alert('Bạn chưa điền đầy đủ thông tin');
    } else if (Usename === '') {
        alert('Bạn chưa điền đầy đủ thông tin');
    } else if (Password === '') {
        alert('Bạn chưa điền đầy đủ thông tin');
    } else if(Phone === '') {
        alert('Bạn chưa điền đầy đủ thông tin');
    }
     else {
        window.location.href = 'login.html'
    }
});
