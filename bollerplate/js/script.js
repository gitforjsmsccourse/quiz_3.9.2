console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')

const body = document.querySelector('body');
backgroundColor = prompt("Какой будет фон у страницы?");
body.style.backgroundColor = backgroundColor;
const fontColor = prompt("Какой будет цвет текста на странице?");
body.style.color = fontColor;
const spanNameText = prompt("Как зовут человека, который вас вдохновляет");
const spanName = document.querySelector('.name');
spanName.innerHTML = spanNameText;
const imgSrc = prompt("Введите адрес картинки");
const img = document.querySelector('img');
img.src = imgSrc;
const shortBioText = prompt("Введите текст страницы");
const textBlock = document.querySelector(".shortBio");
textBlock.innerHTML = shortBioText;
textBlock.className += " animated";