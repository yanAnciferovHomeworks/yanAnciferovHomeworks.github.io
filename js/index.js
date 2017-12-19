document.body.onscroll = function none() {
    
    var top = document.querySelector("#gotop");
 var nav = document.querySelector("#scroll-nav");
    var nav_static = document.querySelector("#nav-static");
    if (window.pageYOffset <   document.documentElement.clientHeight + 50) {
        top.style.display = 'none';
        //nav.style.display = 'block';
        nav_static.style.display = 'none';
    }
    else
    {
        top.style.display = 'block';
          //nav.style.display = 'none';
       nav_static.style.display = 'block';
    }
};

var button = document.querySelector("#button-menu");
var sideMenu = document.querySelector("#side");
var closeMenu = document.querySelector("#close-menu");
button.onclick = function(){
    
    sideMenu.style.right = '0';

};


closeMenu.onclick = function(){
sideMenu.style.right = '-300px';

}



