function transliterate() {
    let ukrInput = document.getElementById('ukrInput').value.trim().toLowerCase();
    const transliterationMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh',
        'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya', ' ': '-', "'": '', '!': '', '’': '',',': '','–': '','%': '','-': '','.': '',',': '','—': '',':': '','₴': '','|': '',
    };

    let transliterated = '';
    for (let char of ukrInput) {
        let transliteratedChar = transliterationMap[char] !== undefined ? transliterationMap[char] : char;
        if (transliteratedChar === '-' && transliterated.endsWith('-')) {
            continue; // Пропустити додавання повторного '-'
        }
        transliterated += transliteratedChar;
    }

    transliterated = transliterated.replace(/-+/g, '-'); // Замінити всі послідовності '-' на один '-'

    transliterated += '-action';

    document.getElementById('result').value = transliterated;
}

function copyToClipboard() {
    const resultInput = document.getElementById('result');
    resultInput.select();
    document.execCommand('copy');
}

window.transliterate = transliterate;
window.copyToClipboard = copyToClipboard;