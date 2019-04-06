const wrapper = document.querySelector('#main');

const header = document.querySelector('.header');


// console.log(navigator.userAgent);



showViewportInfo();

showUserAgent();



window.addEventListener('resize',() => {

    showViewportInfo();

});


function showViewportInfo(){

    const ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    header.innerHTML = `<span class="width">${ww}</span> x ${wh}`;
}

function showUserAgent(){

    const userAgentData = navigator.userAgent;
    
    document.querySelector('.userInfo').textContent = 
    `${userAgentData}`;

    const isMobile = /mobile/i.test(userAgentData);
    if(isMobile){
        document.querySelector('.isMobile').textContent = '(Mobile)';
    }
}