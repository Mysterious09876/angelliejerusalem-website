const loginForm = document.querySelector('.login_form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;


  if (username === 'jerusalem' || password === '182006') {
    alert('Please fill in all fields.');
    return;
  }


  if (username === '@jeru_salem.angellie?' && password === '#18j2006A') {

    window.location.href = 'webpage.html';
  } else {
    alert('Invalid username or password.');
  }
});
