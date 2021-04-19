// seleksi item yang ingin di pilih
const main = document.querySelector('main');

// Kemudian tambahkan event listener untuk perhitungan harga
main.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.id === 'count') {
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

        lontongCalculation.innerHTML = `${lontong.value} x Rp 1.500 = `;
        totalItemLontong.innerHTML = `${(lontong.value * 1500).toLocaleString(
            'id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            }
        )}`;

        risolCalculation.innerHTML = `${risol.value} x Rp 2.000 = `;
        totalItemRisol.innerHTML = `${(risol.value * 2000).toLocaleString(
            'id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            }
        )}`;

        tahuCalculation.innerHTML = `${tahu.value} x Rp 1.000 = `;
        totalItemTahu.innerHTML = `${(tahu.value * 1000).toLocaleString(
            'id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            }
        )}`;

        totalPrice.innerHTML = `${(
            parseInt(lontong.value * 1500) +
            parseInt(risol.value * 2000) +
            parseInt(tahu.value * 1000)
        ).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        })}`;
    }

    if (event.target.id === 'reset') {
        main.children[1].reset();
    }
});
