/* LESSON 3 - Programming Tasks */

/* Profile Object  */


/* Populate Profile Object with placesLive objects */



/* DOM Manipulation - Output */

/* Name */
let myProfile = {

};
myProfile.name = "Melyssa Silva";

/* Photo with attributes */
myProfile.photo = 'images/profilephoto.jpg';

/* Favorite Foods List*/
myProfile.favoriteFoods = [
    'Pizza', 
    'Japonese food', 
    'Rice and Beans', 
    'Fried chicken',
    'Ice Cream'
]

/* Hobbies List */
myProfile.hobbies = [
    'Travel',
    'Indoor Climbing',
    'Yoga',
    'Capoeira'
]

/* Places Lived DataList */
myProfile.placesLived = []

myProfile.placesLived.push(
    {
        place: 'Santo Andre, SP',
        lenght: '7 years'
    },
    {
        place: 'Sao Paulo, SP',
        lenght: '13 years'
    },
    {
        place: 'Fortaleza, CE',
        lenght: '1 year 6 mounths'
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.lenght;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});