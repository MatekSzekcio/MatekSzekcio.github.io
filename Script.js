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


//Halmazok közép bezáró gombok
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