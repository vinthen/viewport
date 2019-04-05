const wrapper = document.querySelector('#main');

const header = document.querySelector('.header');






showWindowSize();

window.addEventListener('resize',() => {

    showWindowSize();

});




function showWindowSize(){

    const ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // console.log(ww,wh);
    header.innerHTML = `<span class="width">${ww}</span> x ${wh}`;



}