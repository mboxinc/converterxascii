document.getElementById("convertToArt").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value.trim();
  const style = document.getElementById("artStyle").value;

  if (inputText === "") {
    document.getElementById("outputArt").innerText = "Lütfen bir metin girin!";
    return;
  }

  // ASCII Sanat Stilleri
  let asciiArt = "";

  if (style === "block") {
    asciiArt = convertToBlock(inputText);
  } else if (style === "shadow") {
    asciiArt = convertToShadow(inputText);
  } else if (style === "banner") {
    asciiArt = convertToBanner(inputText);
  } else if (style === "3d") {
    asciiArt = convertTo3D(inputText);
  }

  document.getElementById("outputArt").innerText = asciiArt;
});

// ASCII Sanatına dönüştürme işlevleri
function convertToBlock(text) {
  return text
    .split("")
    .map((char) => `█${char}█`)
    .join(" ");
}

function convertToShadow(text) {
  return text
    .split("")
    .map((char) => `${char}░`)
    .join(" ");
}

function convertToBanner(text) {
  return `
  ▄█▄
█   █ ${text.toUpperCase()} █
  ▀█▀
  `;
}

function convertTo3D(text) {
  return text
    .split("")
    .map((char) => `▐█▌${char}▐█▌`)
    .join(" ");
}
