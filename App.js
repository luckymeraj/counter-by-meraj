const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counterValue = document.getElementById('counterValue');

let counter = 0;
increment.addEventListener("click", () => {
    counter++;
    counterValue.textContent = counter;
});

decrement.addEventListener("click", () => {
    counter--;
    counterValue.textContent = counter;
});