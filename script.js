let changeToSubImg1 = document.getElementById('subImg1');
let changeToSubImg2 = document.getElementById('subImg2');
let changeToSubImg3 = document.getElementById('subImg3');
let changeToSubImg4 = document.getElementById('subImg4');
let changeToSubImg5 = document.getElementById('subImg5');
let changeToSubImg6 = document.getElementById('subImg6');
let changeToSubImg7 = document.getElementById('subImg7');
let changeToSubImg8 = document.getElementById('subImg8');
let origImg = document.getElementById('carouselLink');

let bigImg = document.getElementById("primaryImg");
changeToSubImg1.addEventListener("mouseover", subImg1);
changeToSubImg2.addEventListener("mouseover", subImg2);
changeToSubImg3.addEventListener("mouseover", subImg3);
changeToSubImg4.addEventListener("mouseover", subImg4);
changeToSubImg5.addEventListener("mouseover", subImg5);
changeToSubImg6.addEventListener("mouseover", subImg6);
changeToSubImg7.addEventListener("mouseover", subImg7);
changeToSubImg8.addEventListener("mouseover", subImg8);
origImg.addEventListener("mouseout", ogImg);

function ogImg(){
bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Main Image.png" alt="" />`
}

function subImg1(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 1.png" alt="" />`;
}

function subImg2(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 2.png" alt="" />`;
}
function subImg3(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 3.png" alt="" />`;
}
function subImg4(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 4.png" alt="" />`;
}
function subImg5(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 5.png" alt="" />`;
}
function subImg6(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 6.png" alt="" />`;
}
function subImg7(){

bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 7.png" alt="" />`;
}

function subImg8(){

    bigImg.innerHTML = `<img id = "myImg" class = "mainImg" src="/images/Sub-Image 8.png" alt="">`;
    }
