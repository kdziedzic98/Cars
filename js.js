let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');

let start = document.querySelector("#start");

let number = Math.floor(Math.random()*6)+1;
let timer1 = 0;
let timer2 = 0;

function SetPicture(nrPicture)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = nrPicture - 1;

    hidePicture();
    setTimeout("Changeslide()",500);


}


function hidePicture()
{
    $(".images").fadeOut(1000);
}
function Changeslide()
{
    number++; 
    if(number>6)
    {
        number = 1;
    }

    let pictures = "<img src=\"img/slajd" + number + ".jpg\" alt='Cars' class='responsive' />";
    let imgs = document.querySelector('.images');
    imgs.innerHTML = pictures;
    $(".images").fadeIn(1000);
    
    

    timer1 = setTimeout("Changeslide()",10000);
    timer2 = setTimeout("hidePicture()",9500);

}


