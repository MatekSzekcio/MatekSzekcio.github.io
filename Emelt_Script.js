//Emelt halmazok 2. feladat

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('H_E_Select_2a').addEventListener('change', function () {
        const selectElement = this;
        const firstOption = selectElement.querySelector('option[value=""]');

        if (selectElement.value !== "") {
            firstOption.disabled = true;
        } else {
            firstOption.disabled = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('H_E_Select_2b').addEventListener('change', function () {
        const selectElement = this;
        const firstOption = selectElement.querySelector('option[value=""]');

        if (selectElement.value !== "") {
            firstOption.disabled = true;
        } else {
            firstOption.disabled = false;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('.H_E_Select_cuccosok2');
    const checkButton = document.getElementById('H_E_Ell_2');

    selects.forEach((select) => {
        select.addEventListener('change', () => {
            if (select.value === '') {
                select.style.borderColor = 'red';
                select.style.borderWidth = '2px';
            } else {
                select.style.borderColor = '';
                select.style.borderWidth = '';
            }
        });
    });

    checkButton.addEventListener('click', () => {
        let allSelected = true;
        let allCorrect = true;

        const segedElem = document.getElementById("H_E_Seged_2");
        const uresElem = document.getElementById("H_E_ures_mezo_2");
        const valaszElem = document.getElementById("H_E_helyes_valasz_2");

        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        selects.forEach((select) => {
            if (select.value === '') {
                select.style.borderColor = 'red';
                select.style.borderWidth = '2px';
                allSelected = false;
            }
        });

        if (!allSelected) {
            uresElem.style.display = "flex";
            return;
        }

        selects.forEach((select) => {
            if (select.value === 'correct') {
                select.style.borderColor = 'green';
                select.style.borderWidth = '2px';
            } else if (select.value === 'wrong') {
                select.style.borderColor = 'red';
                select.style.borderWidth = '2px';
                allCorrect = false;
            }
        });

        if (!allCorrect) {
            segedElem.style.display = "block";
        } else {
            valaszElem.style.display = "flex";
        }
    });
});

//Emelt halmazok 3. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_3a").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_E_3a_feladat"]:checked');
        const segedElem = document.getElementById("H_E_Seged_3a");
        const uresElem = document.getElementById("H_E_ures_mezo_3a");
        const valaszElem = document.getElementById("H_E_helyes_valasz_3a");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_3b").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_E_3b_feladat"]:checked');
        const segedElem = document.getElementById("H_E_Seged_3b");
        const uresElem = document.getElementById("H_E_ures_mezo_3b");
        const valaszElem = document.getElementById("H_E_helyes_valasz_3b");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_3c").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_E_3c_feladat"]:checked');
        const segedElem = document.getElementById("H_E_Seged_3c");
        const uresElem = document.getElementById("H_E_ures_mezo_3c");
        const valaszElem = document.getElementById("H_E_helyes_valasz_3c");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt halmazok 4. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_4a").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_E_Valasz_4a").value.trim();
        const segedElem = document.getElementById("H_E_Seged_4a");
        const uresElem = document.getElementById("H_E_ures_mezo_4a");
        const szam_checkElem = document.getElementById("H_E_szam_check_4a");
        const valaszElem = document.getElementById("H_E_helyes_valasz_4a");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^2$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue)) || number < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_4b").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_E_Valasz_4b").value.trim();
        const segedElem = document.getElementById("H_E_Seged_4b");
        const uresElem = document.getElementById("H_E_ures_mezo_4b");
        const szam_checkElem = document.getElementById("H_E_szam_check_4b");
        const valaszElem = document.getElementById("H_E_helyes_valasz_4b");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^20$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue)) || number < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt halmazok 5. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_5").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_E_Valasz_5").value.trim();
        const segedElem = document.getElementById("H_E_Seged_5");
        const uresElem = document.getElementById("H_E_ures_mezo_5");
        const szam_checkElem = document.getElementById("H_E_szam_check_5");
        const valaszElem = document.getElementById("H_E_helyes_valasz_5");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^42$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue)) || number < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt halmazok 6. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_6").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_E_Valasz_6").value.trim();
        const segedElem = document.getElementById("H_E_Seged_6");
        const uresElem = document.getElementById("H_E_ures_mezo_6");
        const szam_checkElem = document.getElementById("H_E_szam_check_6");
        const valaszElem = document.getElementById("H_E_helyes_valasz_6");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^4$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue)) || number < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt halmazok 7. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Ell_7").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_E_Valasz_7").value.trim();
        const segedElem = document.getElementById("H_E_Seged_7");
        const uresElem = document.getElementById("H_E_ures_mezo_7");
        const szam_checkElem = document.getElementById("H_E_szam_check_7");
        const valaszElem = document.getElementById("H_E_helyes_valasz_7");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^3$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue)) || number < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt logika 1. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_1a").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_1a_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_1a");
        const uresElem = document.getElementById("L_E_ures_mezo_1a");
        const valaszElem = document.getElementById("L_E_helyes_valasz_1a");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_1b").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_1b_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_1b");
        const uresElem = document.getElementById("L_E_ures_mezo_1b");
        const valaszElem = document.getElementById("L_E_helyes_valasz_1b");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_1c").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_1c_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_1c");
        const uresElem = document.getElementById("L_E_ures_mezo_1c");
        const valaszElem = document.getElementById("L_E_helyes_valasz_1c");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_1d").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_1d_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_1d");
        const uresElem = document.getElementById("L_E_ures_mezo_1d");
        const valaszElem = document.getElementById("L_E_helyes_valasz_1d");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Emelt logika 2. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_2a").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_2a_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_2a");
        const uresElem = document.getElementById("L_E_ures_mezo_2a");
        const valaszElem = document.getElementById("L_E_helyes_valasz_2a");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_2b").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_2b_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_2b");
        const uresElem = document.getElementById("L_E_ures_mezo_2b");
        const valaszElem = document.getElementById("L_E_helyes_valasz_2b");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Ell_2c").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_E_2c_feladat"]:checked');
        const segedElem = document.getElementById("L_E_Seged_2c");
        const uresElem = document.getElementById("L_E_ures_mezo_2c");
        const valaszElem = document.getElementById("L_E_helyes_valasz_2c");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (!selectedOption) {
            uresElem.style.display = "flex";
        }
        if (selectedOption.value === "correct") {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Bezáró gombok

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_2").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_2");
        segedElem.style.display = "none";

    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_3a").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_3a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_3c").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_3c");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_4a").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_4a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_4b").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_4b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_5").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_5");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_6").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_6");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_E_Bezaro_7").addEventListener("click", function () {
        const segedElem = document.getElementById("H_E_Seged_7");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_1a").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_1a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_1b").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_1b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_1c").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_1c");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_1d").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_1d");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_2a").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_2a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_2b").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_2b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_E_Bezaro_2c").addEventListener("click", function () {
        const segedElem = document.getElementById("L_E_Seged_2c");
        segedElem.style.display = "none";

    });
});