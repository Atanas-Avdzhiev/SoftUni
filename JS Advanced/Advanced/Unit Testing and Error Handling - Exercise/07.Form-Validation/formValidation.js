function validate() {
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    const passwordPattern = /^\w{5,15}$/g;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    const usernameEl = document.querySelector('#username');
    const emailEl = document.querySelector('#email');
    const passwordEl = document.querySelector('#password');
    const confirmPasswordEl = document.querySelector('#confirm-password');
    const submitEl = document.querySelector('#submit');
    const isCompanyEl = document.querySelector('#company');
    const companyEl = document.querySelector('#companyInfo');
    const companyNumberEl = document.querySelector('#companyNumber');
    const validDivEl = document.querySelector('#valid');

    submitEl.addEventListener('click', (event) => {
        event.preventDefault();
        let isValid = true;

        if (usernamePattern.test(usernameEl.value)) {
            usernameEl.style.border = 'none';
        }
        else {
            usernameEl.style.borderColor = 'red';
            isValid = false;
        }

        if (emailPattern.test(emailEl.value)) {
            emailEl.style.border = 'none';
        }
        else {
            emailEl.style.borderColor = 'red';
            isValid = false;
        }

        if (passwordPattern.test(passwordEl.value) && passwordEl.value === confirmPasswordEl.value) {
            passwordEl.style.border = 'none';
            confirmPasswordEl.style.border = 'none';
        } else {
            passwordEl.style.borderColor = 'red';
            confirmPasswordEl.style.borderColor = 'red';
            isValid = false;
        }

        if (isCompanyEl.checked) {
            if (Number(companyNumberEl.value) >= 1000 && Number(companyNumberEl.value) <= 9999) {
                companyNumberEl.style.border = 'none';
            } else {
                companyNumberEl.style.borderColor = 'red';
                isValid = false;
            }
        }
        if (isValid) {
            validDivEl.style.display = 'block';
        } else {
            validDivEl.style.display = 'none';
        }
    })

    isCompanyEl.addEventListener('change', () => {
        if (isCompanyEl.checked) {
            companyEl.style.display = 'block';
        }
        else {
            companyEl.style.display = 'none';
            companyNumberEl.value = '';
            companyNumberEl.style.border = 'none';
        }
    })
}