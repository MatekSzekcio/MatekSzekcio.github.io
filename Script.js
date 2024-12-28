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
            // Ha üres a mezõ
            uresElem.style.display = "flex";
        } else if (regex.test(textareaValue)) {
            // Ha megfelel a regex-nek
            valaszElem.style.display = "flex";
        } else {
            // Ha nem felel meg a regex-nek
            segedElem.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bezaro").addEventListener("click", function () {
        const segedElem = document.getElementById("H_K_Seged_1a");
        segedElem.style.display = "none";
        
    });
});

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