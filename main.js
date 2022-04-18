// We want to change view when the submit button is clicked as well as capture the value of what the user has chosen and display it on the thank-you view
// We can use an event handler on the form submit and change the display value on the start container to none while putting display flex on the .thank-you container
// Form should give us the radio button so we'll be able to just put it into the html
const formRef = document.querySelector('form');
const startView = document.querySelector('.start');
const endView = document.querySelector('.thank-you');
const result = document.querySelector('.result');

formRef.addEventListener('submit', (e) => {

    e.preventDefault();
    if(document.querySelector('input[name="rating"]:checked')) {
        const radioAns = document.querySelector('input[name="rating"]:checked').value;
        // console.log(radioAns);

        startView.style.display = 'none';
        result.textContent = radioAns;
        document.querySelector('input[name="rating"]:checked').checked = false;
        endView.style.display = 'flex';


    } else {
        const errorMsg = document.querySelector('.warn');
        errorMsg.style.display = 'block';
    }
})