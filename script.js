'use script';

var featured = document.getElementById("featured");
console.log(featured);

var btn = document.querySelector(".btndiv1 button")
console.log(btn);

var img1 = document.querySelector('#img1');

var img2 = document.querySelectorAll("#img2");

var fleftElement = document.querySelectorAll(".fleftElement");

var images = document.querySelector(".images");

btn.addEventListener('click', ()=>{
    featured.style.marginBottom = '150vw';
    img1.style.marginBottom = "5vw";
    img2.forEach(element => {
        element.style.display = 'block';
        element.style.marginBottom = "5vw";
    });
    btn.style.display = "none";

    fleftElement.forEach(element => {
        element.style.display = "flex";
    });
})



// display: flex;
