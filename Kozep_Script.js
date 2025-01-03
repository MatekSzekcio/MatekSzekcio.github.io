//Közép halmazok 1. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_1a").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_1a").value.trim();
        const segedElem = document.getElementById("H_K_Seged_1a");
        const uresElem = document.getElementById("H_K_ures_mezo_1a");
        const valaszElem = document.getElementById("H_K_helyes_valasz_1a");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        const regex = /^4; 18$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_1b").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_1b").value.trim();
        const segedElem = document.getElementById("H_K_Seged_1b");
        const uresElem = document.getElementById("H_K_ures_mezo_1b");
        const valaszElem = document.getElementById("H_K_helyes_valasz_1b");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        const regex = /^10; 12; 14; 16; 18$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_1c").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_1c").value.trim();
        const segedElem = document.getElementById("H_K_Seged_1c");
        const uresElem = document.getElementById("H_K_ures_mezo_1c");
        const valaszElem = document.getElementById("H_K_helyes_valasz_1c");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        const regex = /^18$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_1d").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_1d").value.trim();
        const segedElem = document.getElementById("H_K_Seged_1d");
        const uresElem = document.getElementById("H_K_ures_mezo_1d");
        const valaszElem = document.getElementById("H_K_helyes_valasz_1d");
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        const regex = /^2; 6; 8; 10; 12; 14; 16$/;

        if (textareaValue === "") {
            uresElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Közép halmazok 2. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_2").addEventListener("click", function () {

        const textareaValue_a = document.getElementById("H_K_Valasz_2a").value.trim();
        const textareaValue_b = document.getElementById("H_K_Valasz_2b").value.trim();
        const segedElem = document.getElementById("H_K_Seged_2");
        const uresElem = document.getElementById("H_K_ures_mezo_2");
        const szam_checkElem = document.getElementById("H_K_szam_check_2");
        const valaszElem = document.getElementById("H_K_helyes_valasz_2");
        const number_a = Number(textareaValue_a);
        const number_b = Number(textareaValue_b);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex_a = /^6$/;
        const regex_b = /^7$/;

        if (textareaValue_a === "" || textareaValue_b === "") {
            uresElem.style.display = "flex";
        } else if (isNaN(Number(textareaValue_a)) || number_a < 0 || isNaN(Number(textareaValue_b)) || number_b < 0) {
            szam_checkElem.style.display = "flex";
        } else if (regex_a.test(textareaValue_a) && regex_b.test(textareaValue_b)) {
            valaszElem.style.display = "flex";
        } else {
            segedElem.style.display = "block";
        }
    });
});

//Közép halmazok 3. feladat

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_3").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_3").value.trim();
        const segedElem = document.getElementById("H_K_Seged_3");
        const uresElem = document.getElementById("H_K_ures_mezo_3");
        const szam_checkElem = document.getElementById("H_K_szam_check_3");
        const valaszElem = document.getElementById("H_K_helyes_valasz_3");
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

//Közép halmazok 4. feladat

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_4").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_4").value.trim();
        const segedElem = document.getElementById("H_K_Seged_4");
        const uresElem = document.getElementById("H_K_ures_mezo_4");
        const szam_checkElem = document.getElementById("H_K_szam_check_4");
        const valaszElem = document.getElementById("H_K_helyes_valasz_4");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^30$/;

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

//Közép halmazok 5. feladat

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_5a").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_5a").value.trim();
        const segedElem = document.getElementById("H_K_Seged_5a");
        const uresElem = document.getElementById("H_K_ures_mezo_5a");
        const szam_checkElem = document.getElementById("H_K_szam_check_5a");
        const valaszElem = document.getElementById("H_K_helyes_valasz_5a");
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
    document.getElementById("H_K_Ell_5b").addEventListener("click", function () {

        const textareaValue = document.getElementById("H_K_Valasz_5b").value.trim();
        const segedElem = document.getElementById("H_K_Seged_5b");
        const uresElem = document.getElementById("H_K_ures_mezo_5b");
        const szam_checkElem = document.getElementById("H_K_szam_check_5b");
        const valaszElem = document.getElementById("H_K_helyes_valasz_5b");
        const number = Number(textareaValue);
        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";
        szam_checkElem.style.display = "none";

        const regex = /^11$/;

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

//Közép halmazok 6. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_6").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_K_6_feladat"]:checked');
        const segedElem = document.getElementById("H_K_Seged_6");
        const uresElem = document.getElementById("H_K_ures_mezo_6");
        const valaszElem = document.getElementById("H_K_helyes_valasz_6");
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

//Közép halmazok 7. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Ell_7a").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_K_7a_feladat"]:checked');
        const segedElem = document.getElementById("H_K_Seged_7a");
        const uresElem = document.getElementById("H_K_ures_mezo_7a");
        const valaszElem = document.getElementById("H_K_helyes_valasz_7a");
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
    document.getElementById("H_K_Ell_7b").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_K_7b_feladat"]:checked');
        const segedElem = document.getElementById("H_K_Seged_7b");
        const uresElem = document.getElementById("H_K_ures_mezo_7b");
        const valaszElem = document.getElementById("H_K_helyes_valasz_7b");
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
    document.getElementById("H_K_Ell_7c").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="H_K_7c_feladat"]:checked');
        const segedElem = document.getElementById("H_K_Seged_7c");
        const uresElem = document.getElementById("H_K_ures_mezo_7c");
        const valaszElem = document.getElementById("H_K_helyes_valasz_7c");
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


//Közép logika 1. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('L_K_Select_1a').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_1b').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_1c').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_1d').addEventListener('change', function () {
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
    const selects = document.querySelectorAll('.Select_cuccosok1');
    const checkButton = document.getElementById('L_K_Ell_1');

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

        const segedElem = document.getElementById("L_K_Seged_1");
        const uresElem = document.getElementById("L_K_ures_mezo_1");
        const valaszElem = document.getElementById("L_K_helyes_valasz_1");

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

//Közép logika 2. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Ell_2a").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_K_2a_feladat"]:checked');
        const segedElem = document.getElementById("L_K_Seged_2a");
        const uresElem = document.getElementById("L_K_ures_mezo_2a");
        const valaszElem = document.getElementById("L_K_helyes_valasz_2a");
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
    document.getElementById("L_K_Ell_2b").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_K_2b_feladat"]:checked');
        const segedElem = document.getElementById("L_K_Seged_2b");
        const uresElem = document.getElementById("L_K_ures_mezo_2b");
        const valaszElem = document.getElementById("L_K_helyes_valasz_2b");
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
    document.getElementById("L_K_Ell_2c").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_K_2c_feladat"]:checked');
        const segedElem = document.getElementById("L_K_Seged_2c");
        const uresElem = document.getElementById("L_K_ures_mezo_2c");
        const valaszElem = document.getElementById("L_K_helyes_valasz_2c");
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
    document.getElementById("L_K_Ell_2d").addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="L_K_2d_feladat"]:checked');
        const segedElem = document.getElementById("L_K_Seged_2d");
        const uresElem = document.getElementById("L_K_ures_mezo_2d");
        const valaszElem = document.getElementById("L_K_helyes_valasz_2d");
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

//Közép logika 3. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('L_K_Select_3a').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_3b').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_3c').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_3d').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_3e').addEventListener('change', function () {
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
    document.getElementById('L_K_Select_3f').addEventListener('change', function () {
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
    const selects = document.querySelectorAll('.Select_cuccosok3');
    const checkButton = document.getElementById('L_K_Ell_3');

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

        const segedElem = document.getElementById("L_K_Seged_3");
        const uresElem = document.getElementById("L_K_ures_mezo_3");
        const valaszElem = document.getElementById("L_K_helyes_valasz_3");

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

//Közép logika 4. feladat
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('L_K_Select_4').addEventListener('change', function () {
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
    const select = document.querySelector('.Select_cuccosok4');
    const checkButton = document.getElementById('L_K_Ell_4');

    select.addEventListener('change', () => {
        if (select.value === '') {
            select.style.borderColor = 'red';  // Ha nincs válasz, piros szegély
            select.style.borderWidth = '2px';
        } else {
            select.style.borderColor = '';  // Ha van válasz, alap szín
            select.style.borderWidth = '';
        }
    });

    checkButton.addEventListener('click', () => {
        let allSelected = true;
        let allCorrect = true;

        const segedElem = document.getElementById("L_K_Seged_4");
        const uresElem = document.getElementById("L_K_ures_mezo_4");
        const valaszElem = document.getElementById("L_K_helyes_valasz_4");

        uresElem.style.display = "none";
        valaszElem.style.display = "none";
        segedElem.style.display = "none";

        if (select.value === '') {
            select.style.borderColor = 'red';
            select.style.borderWidth = '2px';
            allSelected = false;
        }

        if (!allSelected) {
            uresElem.style.display = "flex";
            return;
        }

        if (select.value === 'correct') {
            select.style.borderColor = 'green';
            select.style.borderWidth = '2px';
        } else if (select.value === 'wrong') {
            select.style.borderColor = 'red';
            select.style.borderWidth = '2px';
            allCorrect = false;
        }

        if (!allCorrect) {
            segedElem.style.display = "block";
        } else {
            valaszElem.style.display = "flex";
        }
    });
});

//Bezáró gombok
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_1a").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_1a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_1b").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_1b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_1c").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_1c");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_1d").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_1d");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_2").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_2");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_3").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_3");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_4").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_4");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_5a").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_5a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_5b").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_5b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_6").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_6");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_7a").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_7a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_7b").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_7b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("H_K_Bezaro_7c").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_7c");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_1").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_1");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_2a").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_2a");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_2b").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_2b");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_2c").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_2c");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_2d").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_2d");
        segedElem.style.display = "none";

    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_3").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_3");
        segedElem.style.display = "none";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("L_K_Bezaro_4").addEventListener("click", function () {
        const segedElem = document.getElementById("L_K_Seged_4");
        segedElem.style.display = "none";

    });
});

//Szintek közti váltó gombok
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Kozep_gomb").addEventListener("click", function () {
        window.location.href = "Kozep.html";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Emelt_gomb").addEventListener("click", function () {
        window.location.href = "Emelt.html";

    });
});

//Blurry szórakozás

document.addEventListener("DOMContentLoaded", function () {
    const blurryTextElements = document.querySelectorAll(".blurryText");

    blurryTextElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.classList.add("no-blur");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tdElements = document.querySelectorAll('.Seged_Igazsag_Tabla td');
    const thElements = document.querySelectorAll('.Seged_Igazsag_Tabla th');

    tdElements.forEach(td => {
        td.addEventListener('mouseover', () => {
            if (!td.classList.contains('no-blur')) {
                const columnIndex = Array.from(td.parentNode.children).indexOf(td);
                thElements[columnIndex].classList.add('no-blur');
                tdElements.forEach(cell => {
                    if (Array.from(cell.parentNode.children).indexOf(cell) === columnIndex) {
                        cell.classList.add('no-blur');
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tdElements = document.querySelectorAll('.Seged_Igazsag_Tabla1 td');
    const thElements = document.querySelectorAll('.Seged_Igazsag_Tabla1 th');

    tdElements.forEach(td => {
        td.addEventListener('mouseover', () => {
            if (!td.classList.contains('no-blur')) {
                const columnIndex = Array.from(td.parentNode.children).indexOf(td);
                thElements[columnIndex].classList.add('no-blur');
                tdElements.forEach(cell => {
                    if (Array.from(cell.parentNode.children).indexOf(cell) === columnIndex) {
                        cell.classList.add('no-blur');
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tdElements = document.querySelectorAll('.Seged_Igazsag_Tabla2 td');
    const thElements = document.querySelectorAll('.Seged_Igazsag_Tabla2 th');

    tdElements.forEach(td => {
        td.addEventListener('mouseover', () => {
            if (!td.classList.contains('no-blur')) {
                const columnIndex = Array.from(td.parentNode.children).indexOf(td);
                thElements[columnIndex].classList.add('no-blur');
                tdElements.forEach(cell => {
                    if (Array.from(cell.parentNode.children).indexOf(cell) === columnIndex) {
                        cell.classList.add('no-blur');
                    }
                });
            }
        });
    });
});

//Közép Panel

document.addEventListener('DOMContentLoaded', () => {
    const firstNavLinksContainer = document.getElementById('H_K_nav_links');
    const firstTaskSection = document.getElementById('H_K_Panelhez_id');
    generateNavigationLinks(firstNavLinksContainer, firstTaskSection, 'H_K_Panelhez_id-');

    const secondNavLinksContainer = document.getElementById('L_K_nav_links');
    const secondTaskSection = document.getElementById('L_K_Panelhez_id');
    generateNavigationLinks(secondNavLinksContainer, secondTaskSection, 'L_K_Panelhez_id-');

    window.addEventListener('scroll', () => {
        highlightActiveLink();
    });

    function highlightActiveLink() {
        const headings = document.querySelectorAll('h2');
        let closestHeading = null;

        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();

            if (rect.top <= 0 && rect.bottom > 0) {
                if (!closestHeading || rect.top > closestHeading.getBoundingClientRect().top) {
                    closestHeading = heading;
                }
            }
        });

        if (closestHeading) {
            document.querySelectorAll('.navigation_panel li').forEach(item => {
                item.style.backgroundColor = '';
            });

            const activeLink = document.querySelector(`a[href="#${closestHeading.id}"]`).parentElement;
            activeLink.style.backgroundColor = '#bcbcbc';
        }
    }

});

function generateNavigationLinks(navLinksContainer, taskSection, idPrefix) {
    if (!navLinksContainer || !taskSection) return;

    navLinksContainer.innerHTML = '';
    const headings = taskSection.querySelectorAll('h2');

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `${idPrefix}${index + 1}`;
        }

        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        const listItem = document.createElement('li');
        listItem.appendChild(link);
        navLinksContainer.appendChild(listItem);
    });

    navLinksContainer.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 10,
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.Vissza_gomb').addEventListener('click', function () {
        window.location.href = 'Index.html';
    });
});