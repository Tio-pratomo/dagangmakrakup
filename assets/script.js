// seleksi item yang ingin di pilih
const main = document.querySelector('main');

// Kemudian tambahkan event listener untuk perhitungan harga
main.addEventListener('click', function (event) {
    if (event.target.id === 'count') {
        event.preventDefault();
        const lontong =
            main.children[1].children[0].children[0].children[0].children[1]
                .children[0];
        const lontongCalculation =
            main.children[3].children[0].children[0].children[1];
        const totalItemLontong =
            main.children[3].children[0].children[0].children[2];
        const risol =
            main.children[1].children[0].children[0].children[1].children[1]
                .children[0];
        const risolCalculation =
            main.children[3].children[0].children[1].children[1];
        const totalItemRisol =
            main.children[3].children[0].children[1].children[2];
        const tahu =
            main.children[1].children[0].children[0].children[2].children[1]
                .children[0];
        const tahuCalculation =
            main.children[3].children[0].children[2].children[1];
        const totalItemTahu =
            main.children[3].children[0].children[2].children[2];
        const totalPrice = document.getElementsByClassName('total')[0];

        if (lontong.value === '' && risol.value === '' && tahu.value === '') {
            lontong.value = 0;
            risol.value = 0;
            tahu.value = 0;
        } else if (lontong.value === '' && risol.value === '') {
            lontong.value = 0;
            risol.value = 0;
        } else if (lontong.value === '' && tahu.value === '') {
            lontong.value = 0;
            tahu.value = 0;
        } else if (risol.value === '' && tahu.value === '') {
            risol.value = 0;
            tahu.value = 0;
        } else if (lontong.value === '') {
            lontong.value = 0;
        } else if (risol.value === '') {
            risol.value = 0;
        } else if (tahu.value === '') {
            tahu.value = 0;
        }

        lontongCalculation.innerText = `${lontong.value} x Rp 1.500`;
        totalItemLontong.innerText = ` = ${(
            lontong.value * 1500
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;

        risolCalculation.innerText = `${risol.value} x Rp 2.000`;
        totalItemRisol.innerText = ` = ${(risol.value * 2000).toLocaleString(
            'id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            }
        )}`;

        tahuCalculation.innerText = `${tahu.value} x Rp 1.000`;
        totalItemTahu.innerText = ` = ${(tahu.value * 1000).toLocaleString(
            'id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            }
        )}`;

        totalPrice.innerText = `${(
            parseInt(lontong.value * 1500) +
            parseInt(risol.value * 2000) +
            parseInt(tahu.value * 1000)
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;
    }
});
