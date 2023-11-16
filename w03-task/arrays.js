let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');

let namesLength = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length;


const steps = ['one', 'two', 'three']
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const letter = ['A', 'B', 'A']
function convertGpa(letter) {
    let points = 0;
    if (letter === "A") {
        points = 4;
    } else if (letter === "B") {
        points = 3;
    }
    return points
} 
const gpaPoints = grades.map(convertGpa);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = fruits.filter(function (word) {
    return word.length < 6;  
})

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);