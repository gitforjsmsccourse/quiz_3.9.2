console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')

const body = document.querySelector('body');
backgroundColor = prompt("Какой будет фон у страницы?");
body.style.backgroundColor = backgroundColor;
fontColor = prompt("Какой будет цвет текста на странице?");
body.style.color = fontColor;
spanNameText = prompt("Как зовут человека, который вас вдохновляет");
spanName = document.querySelector('.name');
spanName.innerHTML = spanNameText;
imgSrc = prompt("Введите адрес картинки");
img = document.querySelector('img');
img.src = imgSrc;
shortBioText = prompt("Введите текст страницы");
textBlock = document.querySelector(".shortBio");
textBlock.innerHTML = shortBioText;
textBlock.className += " animated";