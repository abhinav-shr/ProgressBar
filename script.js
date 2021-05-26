//Code one
const prev = document.querySelector('.prev');
const next = document.querySelector(".next");
const bar = document.querySelector(".bar");
let count = 1;
prev.addEventListener('click',decreaseProgress);
next.addEventListener('click',increaseProgress);

function increaseProgress(){
    for(let i=0; i<2;i++){
        let barChild = bar.children[count];
        barChild.classList.add('progress');
        count++;
    }
    if(count>=3){
        prev.removeAttribute('disabled');
    }
    if(count===7){
        next.setAttribute('disabled',true);
    }
}

function decreaseProgress(){
    for(let i=0; i<2;i++){
        count--
        let barChild = bar.children[count];
        barChild.classList.remove('progress');      
    }

    if(count<3){
        prev.setAttribute('disabled',true);
    }

    if(count<7){
        next.removeAttribute('disabled');
    }
}


//code two
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector(".next2");
const progress2 = document.querySelector(".progress2");
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next2.addEventListener('click', () => {
    currentActive++;

    update();
})
prev2.addEventListener('click', () => {
    currentActive--;

    update();
})
function update(){
    if(currentActive>1){
        prev2.disabled = false;
    }else{
        prev2.disabled = true;
    }
    if(currentActive===4){
        next2.disabled = true;
    }else{
        next2.disabled = false;
    }

    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress2.style.width = ((actives.length - 1)/(circles.length - 1)*100) +'%';
    

}