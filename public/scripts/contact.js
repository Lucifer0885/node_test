const submitBtn = document.querySelector('#submitBtn');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');

submitBtn.addEventListener('click', () => {
    if (nameInput.value === "" || emailInput.value === ""){
        window.alert(
            `You need to fill out the form!`
        );
        setTimeout(() => {
            window.location.href = '/contactUs';
        }, 0);
        return;
    }
    window.alert(
        `Thank you ${nameInput.value} for contacting us, you will hear from us shortly in ${emailInput.value}!`
    );
    setTimeout(() => {
        window.location.href = '/contactUs';
    }, 0);
});
