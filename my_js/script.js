'use strict'

const menu = document.querySelector('.menu'),
    li = document.createElement('li');

menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

const menuItems = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItems[2], menuItems[1]);

// const itemNames = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];

// for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].textContent = `${itemNames[i]} пункт`;
// }

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

const title = document.getElementById('title');
let titleText = title.innerHTML;

titleText = titleText.slice(0, ( titleText.indexOf('только') + 'только'.length + 1 )) +
    'подлинную ' + titleText.slice( titleText.indexOf('только') + 'только'.length + 1 );
title.textContent = `${titleText}`;

const adv = document.querySelector('.adv');

adv.remove();

const pmpt = document.getElementById('prompt');
let ans = prompt("Как Вы относитесь к технике Apple?", "");

if (ans == null) {
    ans = '';
}

let quest = document.createElement('p'),
    answ = document.createElement('p');

quest.innerHTML = `Как Вы относитесь к технике Apple?`;
answ.innerHTML = `${ans}`;
pmpt.appendChild(quest);
pmpt.appendChild(answ);