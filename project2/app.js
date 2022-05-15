"use strict";

let data = [
    {
        name: 'Stas',
        age: '42'
    },
    {
        name: 'Ola',
        age: '24'
    },
    {
        name: 'Nik',
        age: '35'
    },
    {
        name: 'Sem',
        age: '19'
    },
    {
        name: 'Ali',
        age: '58'
    },
    {
        name: 'Gala',
        age: '57'
    },
    {
        name: 'Onese',
        age: '26'
    },
    {
        name: 'Sapa',
        age: '46'
    },
];

const info = document.querySelector('#info');

let details = data.map((item)=>{
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old ' + '</div>';
});

info.innerHTML = details.join('\n');