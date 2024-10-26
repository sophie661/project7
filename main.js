let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
   }

   let body = document.querySelector("body");
   let mobileMenu = document.querySelector(".mobile_menu");
   if (!body.classList.contains("off-scroll") &&
                 !mobileMenu.classList.contains('hide')){
        body.classList.add("off-scroll");
    }
    else{
        body.classList.remove("off-scroll");
    }
});

window.onscroll = function() {
    let h = document.documentElement.clientHeight;

    if (window.scrollY >= h*3.8){
        classLink = '.comments-link';
    }
     else if (window.scrollY >= h*2.8){
        classLink = '.works-link';
    }
    else if (window.scrollY >= h*1.8){
        classLink = '.skills-link';
    }
    else if (window.scrollY >= h*0.8){
        classLink = '.about-link';
    }
    else {
        classLink = '.main-link';
    }

    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);
    
    if (!newActiveBtn.classList.contains('active')){
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active');

        menu.addEventListener('click', function(event){
            let clickTarget = event.target;
            let activeBtn = document.querySelector('.active');
            if (clickTarget.classList.contains('nav-link') ){
                clickTarget.classList.add('active');
                activeBtn.classList.remove('active');

                let mobile = document.querySelector('.mobile_menu');
                if (!mobile.classList.contains('hide')){
                    mobile.classList.add('hide');
                }
            }
        });
    }
};


document.querySelector(".mobile-button").addEventListener("click",
    function(event) 
    {
        document.querySelector(".mobile_menu").classList.toggle("hide");
    });
