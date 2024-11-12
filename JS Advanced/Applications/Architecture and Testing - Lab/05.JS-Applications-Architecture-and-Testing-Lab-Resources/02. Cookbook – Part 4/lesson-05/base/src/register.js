export function register() {

    const siteSections = document.querySelectorAll('.site-section');
    siteSections.forEach(section => {
        section.style.display = 'none';
    })

    const register = document.querySelector('#register');
    register.style.display = 'block';

    const registerURL = `http://localhost:3030/users/register`;
    let registerForm = document.querySelector('#register form');

    const newForm = registerForm.cloneNode(true);
    registerForm.replaceWith(newForm);
    registerForm = newForm;

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);

        fetch(registerURL, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'), // getting "email" from the name of the tag in the HTML file
                password: formData.get('password') // getting "password" from the name of the tag in the HTML file
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.code >= 400) {
                    return alert(data.message);
                }
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('email', data.email);
                localStorage.setItem('id', data._id);
                registerForm.reset();
                location.href = '/src/index.html';
            })
            .catch(err => alert(err.message));
    })
}