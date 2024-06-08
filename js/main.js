let socialList=document.querySelector('.social-list');
let socialIcons=document.querySelector('.social-icons');
let socialIcon=document.querySelectorAll('.social-icon');

socialList.addEventListener('click', () => {
    socialIcons.classList.toggle('icons-scale');
});

socialIcon.forEach(item => {

    let icon=document.getElementById(item.dataset.icon);

    item.addEventListener('mouseover', () => {
        icon.classList.add('icon-rotate');
    });

    item.addEventListener('mouseout', () => {
        icon.classList.remove('icon-rotate');
    });

});

//to top button
window.onscroll = function(){
    if(window.scrollY >= 200){
        document.querySelector('.to-top').style.opacity="1";
        document.querySelector('.to-top').style.cursor="pointer";
    }else{
        document.querySelector('.to-top').style.opacity="0";
        document.querySelector('.to-top').style.cursor="auto";
    }
}

//for owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        770:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


//for equal height caroudel
let long=document.querySelector('.review.long').scrollHeight;
let reviews=document.querySelectorAll('.review');
reviews.forEach(review => {
    review.style.height= long + 'px';
});

// for wow
new WOW().init();
