'use strict';

const form = document.querySelector('form');

let input = document.querySelector('.input');

let displayVar = document.querySelector('.info');



const loadPokemon = (id, callback) => {
  let name2 = 'default';
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    callback(data.name)
  })
  return name2;

}

function display(info) {
  let displayVar = document.querySelector('.info');
  displayVar.innerHTML = info;

}
let newvar = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loadPokemon(input.value, display); 
  input.value = '';
})