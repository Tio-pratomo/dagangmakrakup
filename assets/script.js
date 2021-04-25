// seleksi item yang ingin di pilih
const form = document.getElementsByTagName('form')[0];
const description = document.getElementsByClassName('description')[0];

// Kemudian tambahkan event listener untuk perhitungan harga
form.addEventListener('click', function (event) {
    if (event.target.id === 'count') {
        event.preventDefault();
        description.classList.remove('fade');
        const inputUser = {
            lontong: form.children[0].children[1].children[0],
            risol: form.children[1].children[1].children[0],
            gorengan: form.children[2].children[1].children[0],
        };

        const pricingDetails = {
            lontongDetail: description.querySelector('.calculation-lontong'),
            lontongTotal: description.querySelector('.total-item-lontong'),
            risolDetail: description.querySelector('.calculation-risol'),
            risolTotal: description.querySelector('.total-item-risol'),
            gorenganDetail: description.querySelector('.calculation-gorengan'),
            gorenganTotal: description.querySelector('.total-item-gorengan'),
            totalPrice: description.querySelector('.total'),
        };

        if (
            inputUser.lontong.value < '0' &&
            inputUser.risol.value < '0' &&
            inputUser.gorengan.value < '0'
        ) {
            inputUser.lontong.value = 0;
            inputUser.risol.value = 0;
            inputUser.gorengan.value = 0;
        } else if (
            inputUser.lontong.value < '0' &&
            inputUser.risol.value < '0'
        ) {
            inputUser.lontong.value = 0;
            inputUser.risol.value = 0;
        } else if (
            inputUser.lontong.value < '0' &&
            inputUser.gorengan.value < '0'
        ) {
            inputUser.lontong.value = 0;
            inputUser.gorengan.value = 0;
        } else if (
            inputUser.risol.value < '0' &&
            inputUser.gorengan.value < '0'
        ) {
            inputUser.risol.value = 0;
            inputUser.gorengan.value = 0;
        } else if (inputUser.lontong.value < '0') {
            inputUser.lontong.value = 0;
        } else if (inputUser.risol.value < '0') {
            inputUser.risol.value = 0;
        } else if (inputUser.gorengan.value < '0') {
            inputUser.gorengan.value = 0;
        }

        pricingDetails.lontongDetail.innerHTML = `${inputUser.lontong.value} x Rp 1.500`;
        pricingDetails.lontongTotal.innerHTML = `  = ${(
            inputUser.lontong.value * 1500
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;

        pricingDetails.risolDetail.innerHTML = `${inputUser.risol.value} x Rp 2.000`;
        pricingDetails.risolTotal.innerHTML = `  = ${(
            inputUser.risol.value * 2000
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;

        pricingDetails.gorenganDetail.innerHTML = `${inputUser.gorengan.value} x Rp 1.000`;
        pricingDetails.gorenganTotal.innerHTML = `  = ${(
            inputUser.gorengan.value * 1000
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;

        pricingDetails.totalPrice.innerHTML = `${(
            parseInt(inputUser.lontong.value * 1500) +
            parseInt(inputUser.risol.value * 2000) +
            parseInt(inputUser.gorengan.value * 1000)
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;
    }

    if (event.target.id === 'reset') {
        description.classList.add('fade');
    }
});
