const form = document.getElementById('formulario');
const box = document.getElementById('click-here');
const cmbCountry = document.getElementById('cmbCountry');
const cmbCity = document.getElementById('cmbCity');

cmbCountry.addEventListener('change', (event) => {
    const contryCode = event.target.value;
    const countryCities = {
        'ar': [
            {
                value: 'caba',
                label: 'CABA'
            },
            {
                value: 'cord',
                label: 'Cordoba'
            }
        ],
        'ur': [
            {
                value: 'mont',
                label: 'Montevideo'
            }
        ],
        "co": [
            {
                value: 'bogt',
                label: 'Bogota'
            }
        ]
    };
    const cities = countryCities[contryCode] || [];
    cmbCity.innerText = '';

    cities.forEach((city) => {
        const option = document.createElement('option');
        option.setAttribute('value', city.value);
        option.innerText = city.label;
        cmbCity.appendChild(option);
    });
});



