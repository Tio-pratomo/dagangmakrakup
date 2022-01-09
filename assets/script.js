// seleksi item yang ingin di pilih
const form = document.getElementsByTagName('form')[0];
const description = document.getElementsByClassName('description')[0];
const reset = document.getElementById('reset');

const moneyBack = document.querySelector('.money-back');
const inputMoneyBack = document.querySelector('input[name="customer"]');

// FUNCTION - FUNCTION
const displayItems = (name) => {
    const calculateItem = document.querySelector(`.calculation-${name}`);
    const totalPriceItem = document.querySelector(`.total-item-${name}`);
    const inputItem = document.querySelector(`#${name}`);
    let resultPrice = 0;

    if (name === 'lontong') {
        resultPrice = 1500;

        calculateItem.innerText = `${inputItem.value} x 1.500`;
        totalPriceItem.innerText = `Rp ${(inputItem.value * resultPrice).toLocaleString('id-ID')}`;
    } else if (name === 'risol') {
        resultPrice = 2000;

        calculateItem.innerText = `${inputItem.value} x 2.000`;
        totalPriceItem.innerText = `Rp ${(inputItem.value * resultPrice).toLocaleString('id-ID')}`;
    } else if (name === 'gorengan') {
        resultPrice = 1000;

        calculateItem.innerText = `${inputItem.value} x 1.000`;
        totalPriceItem.innerText = `Rp ${(inputItem.value * resultPrice).toLocaleString('id-ID')}`;
    }
};

const displayTotalPay = (elTotal, ...elements) => {
    const total = elements.map((element) => element.innerText.slice(3) * 1000).reduce((acc, currVal) => acc + currVal);
    const result = total.toLocaleString('id-ID', {
        currency: 'IDR',
        style: 'currency',
        maximumFractionDigits: 0,
    });

    elTotal.innerText = `${result}`;
};

const sanitizeInputUser = () => {
    const inputItems = form.querySelectorAll('input');

    inputItems.forEach((input) => {
        input.value === '' ? (input.value = 0) : null;
    });
};

// Kemudian tambahkan event listener untuk perhitungan harga
form.addEventListener('submit', function (e) {
    e.preventDefault();
    description.classList.remove('fade');

    sanitizeInputUser();

    displayItems('lontong');
    displayItems('risol');
    displayItems('gorengan');

    displayTotalPay(
        document.querySelector('.total'),
        document.querySelector('.total-item-lontong'),
        document.querySelector('.total-item-risol'),
        document.querySelector('.total-item-gorengan')
    );
});

inputMoneyBack.addEventListener('input', function () {
    const total = document.querySelector('.total').innerText.slice(3) * 1000;
    const payChange = this.value - total;

    moneyBack.innerText = `Rp ${payChange.toLocaleString('id-ID')}`;
});

reset.addEventListener('click', function () {
    description.classList.add('fade');

    inputMoneyBack.value = '';
    moneyBack.innerText = '';
});
