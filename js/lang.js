const select = document.querySelector('select');
const allLang = ['ru', 'tr', 'en'];


select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#tr';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elements = document.querySelectorAll('.lng-' + key);
        elements.forEach(elem => {
            elem.textContent = langArr[key][hash];
        })
    }
}

changeLanguage();