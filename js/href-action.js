function transliterate() {
  const ukrInput = document
    .getElementById("ukrInput")
    .value.trim()
    .toLowerCase();

  const transliterationMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "h",
    ґ: "g",
    д: "d",
    е: "e",
    є: "ie",
    ж: "zh",
    з: "z",
    и: "y",
    і: "i",
    ї: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ь: "",
    ю: "yu",
    я: "ya",
    " ": "-",
    "'": "",
    "!": "",
    "’": "",
    ",": "",
    "–": "",
    "%": "",
    "-": "",
    ".": "-",
    "—": "",
    ":": "",
    "₴": "",
    "|": "",
    "(": "",
    ")": "",
    "?": "",
    '"': "",
    " ": "", // вузький пробіл
  };

  let transliterated = "";

  for (let char of ukrInput) {
    let transliteratedChar = transliterationMap.hasOwnProperty(char)
      ? transliterationMap[char]
      : char;

    if (transliteratedChar === "-" && transliterated.endsWith("-")) {
      continue;
    }

    transliterated += transliteratedChar;
  }

  transliterated = transliterated.replace(/-+/g, "-");
  transliterated = transliterated.replace(/^-|-$/g, "");
  transliterated += "-action";

  document.getElementById("result").value = transliterated;
}

function copyToClipboard() {
  const resultInput = document.getElementById("result");
  navigator.clipboard
    .writeText(resultInput.value)
    .then(() => alert("Скопійовано!"))
    .catch((err) => alert("Помилка копіювання: " + err));
}

window.transliterate = transliterate;
window.copyToClipboard = copyToClipboard;
