document.body.onscroll = function none() {
    
    var top = document.querySelector("#gotop");
 var nav = document.querySelector("#scroll-nav");
    var nav_static = document.querySelector("#nav-static");
    if (window.pageYOffset <   document.documentElement.clientHeight + 50) {
        
        if( top != null)
            top.style.display = 'none';

        if( nav_static != null)
            nav_static.style.display = 'none';
    }
    else
    {
        if( top != null)
            top.style.display = 'block';
        if( nav_static != null)
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



