

const slider = document.querySelector('.weather-data');
let card = document.querySelectorAll('.card');
let isDown = false; 
let startX;
let scrollLeft;


    slider.addEventListener('mousedown', (e) =>{
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        console.log(scrollLeft)
        card.forEach(e => {
        e.classList.add('card-active');
   
    })
    });



slider.addEventListener('mouseleave', () =>{
    
    isDown = false;
    slider.style.cursor = 'pointer';   

    card.forEach(e => {
        e.classList.remove('card-active');
   
    })
});

slider.addEventListener('mouseup', () =>{
    
    isDown = false;
    slider.style.cursor = 'pointer';   

    card.forEach(e => {
        e.classList.remove('card-active');
   
    })
});

slider.addEventListener('mousemove', (e) =>{
    if(isDown == false) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX ;
    slider.scrollLeft = scrollLeft - walk;
});