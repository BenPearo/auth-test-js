// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const pass = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, pass)
        .then(cred => {
            console.log(cred);

            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
        })
        .catch(err => {
            if (err.code === 'auth/email-already-in-use') {
                alert("Error: Email already in use");
            } else {console.error(err);}
            console.log(error.message);
        });
})