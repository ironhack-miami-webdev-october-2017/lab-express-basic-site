let size = 32;

const h1Tag = document.querySelector('h1');

h1Tag.onclick = () => {
  size -= 2;
  h1Tag.style.fontSize = size + "px";
};

let sizeP = 16;

const pTag = document.querySelector('p');

pTag.onclick = () => {
  sizeP += 1;
  pTag.style.fontSize = sizeP + "px";
};
