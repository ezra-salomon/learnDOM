


function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


const letters = document.querySelectorAll(".letter");

setInterval(function(){
    for (let letter of letters){
        letter.style.color = randomRGB();
    }
}, 1000)





const form = document.querySelector("#logoform");
const nameInput = document.querySelector('input[name="name"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newLogo = makeLogo(
        nameInput.value, 
        colorInput.value, 
        fontSizeInput.value
    );

    results.appendChild(newLogo);
    
});

function makeLogo(name, color, size) {
    const logo = document.createElement('h2');

    logo.innerText = name;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}







