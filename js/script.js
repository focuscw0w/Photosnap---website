const navToggler = document.querySelector('.nav-toggler')
const responsiveNav = document.querySelector('.responsive-nav')
const amountOfMoney = document.querySelectorAll('.amount-of-money')
const perText = document.querySelectorAll('.per')
const checkInput = document.getElementById('check-button')

/* Click on responsive button */

$(navToggler).on('click', function(e){
    $(responsiveNav).toggleClass('open');
    $(navToggler).toggleClass('active');
    e.preventDefault();
})

/* Updating value of license */

checkInput.addEventListener('click', () => {
    if (checkInput.checked) {
        amountOfMoney.item(0).textContent = '$190.00';
        amountOfMoney.item(1).textContent = '$390.00';
        amountOfMoney.item(2).textContent = '$990.00';
        perText.forEach(text => { text.textContent = 'per year' });
    }
    else {
        amountOfMoney.item(0).textContent = '$19.00';
        amountOfMoney.item(1).textContent = '$39.00';
        amountOfMoney.item(2).textContent = '$99.00';
        perText.forEach(text => { text.textContent = 'per month' });
    }
})
