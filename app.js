let inc = document.getElementById('increment');
let dec = document.getElementById('decrement');
let counter = document.getElementById('counter');
let reset = document.getElementById('reset');
let count = 0;

inc.addEventListener('click', function() {
    count++;
    counter.innerHTML = count;
});
dec.addEventListener('click', function(){
    count--;
    counter.textContent = count;
});
reset.addEventListener('click', function(){
    count = 0;
    counter.textContent = count
});