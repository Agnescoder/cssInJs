const h1 = document.querySelector("h1");

// style css
document.body.style.height = "90vh";
h1.style.color = "black";
h1.style.position = "fixed";
h1.style.top = "50%";
h1.style.left = "50%";
h1.style.transform = "translate(-50%, -50%)";
h1.style.fontSize = "40px";
h1.style.fontFamily = "ariel";

document.body.addEventListener('mousemove', (event) => {
    const x = event.clientX + 1;
    const y = event.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = x + ', ' + y ;

    const red = x/width * 100; // 100%
    const green = y/height * 100;
    const blue = ((x/width * 100) + (y/height * 100))/2;
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})