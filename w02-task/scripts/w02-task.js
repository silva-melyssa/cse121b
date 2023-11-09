/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Melyssa Santos da Silva';
let currentYear = 2023
const profilePicture = 'images/profilephoto.jpg'

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

const favoriteFoods = ['Pizza', 'Japonese food', 'Rice and Beans', 'Fried chicken']

foodElement.innerHTML += `<br>${favoriteFoods}`;

const newFavoriteFood = 'Ice Cream';
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;