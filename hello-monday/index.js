$(function () {

    var slideIndex = 1;
    var counter = 12;
    var imgForParalax = [];
    var isSlide = true;
    $('#descr')[0].style.backgroundColor = "rgba(255,0,0,.5)"
    imgForParalax = $(".current")[0].children[0].children;
    
    

    var slides = [
        { name: "Bendy 10", descrName: "Capturing the spirit of our time", textColor: "rgb(161,128,183)", color: "rgba(51,21,74,.9)", descr: 'The ancient myth of Narcissus is becoming more relevant than ever. Obviously, you’re bound to become a bit self-centered when you’re the son of the river god and a nymph, but the story shows us that the pursuit of vanity is often to our own detriment. He fell in love with his own reflection, lost his will to live, and stared into himself until he died. Oh, the joy of happy endings.' }, //ìóæèê ñ ëèöîì â æîïå
        { name: "YouTube Kids", descrName: "Safe and fub digital playtime", textColor: "rgb(103,19,16)", color: "rgba(255,0,0,.5)", descr: 'Hello Monday and YouTube got together, and we are happy to announce the birth of our love child, YouTube Kids! A safe place for kids to play.' },
        { name: "NASA GeneLab", descrName: "Visualizing biology in microgravity", textColor: "rgb(38,45,52)", color: "rgba(137,125,103,.9)", descr: "Cutting-edge biological experiments conducted in space. Discoveries made in microgravity. This is GeneLab, and it NASA largest open-source database for space life science research." },
        { name: "Wove", descrName: "The Future Gets Flexible", textColor: "rgb(119,119,119)", color: "rgba(50, 50, 50,.9)", descr: "Polyera is twisting the concept of wearable technology into something that is always on, fully flexible, and completely customizable. After 10 years of developing the technology, they’re finally ready to unleash their product Wove onto the world." },
        { name: "The Fwa", descrName: "Revamping an old favorite", textColor: "rgb(0,17,15)", color: "rgba(50, 50, 50,.9)", descr: "Since May 2000, The FWA has been celebrating digital innovation. In recent years, the platform was not living up to the ideals it celebrates, so we partnered with the FWA to do a complete revamp and take a legendary digital award platform to the next level." },
        { name: "Hollow", descrName: "10,000 trees made digital", textColor: "rgb(255,255,255)", color: "rgba(50, 50, 50,.9)", descr: "Artist Katie Paterson’s work is about natural phenomenon like time, the universe and volcanoes. We became a mix of a rational scientists and poetic artists when we shaped the digital experience to match her newest piece, Hollow." },
        { name: "Google Cloud Platform", descrName: "Machine Learning", textColor: "rgb(255,255,255)", color: "rgba(59, 59, 59,.9)", descr: "Machine Learning meets abstract expressionism in this thought-provoking video for Google Cloud Platform." },
        { name: "#AlmostForgot", descrName: "A new kind of music", textColor: "rgb(103,121,174)", color: "rgba(20, 20, 58,.9)", descr: "Following The DNA Project, the year-long musical experiment that documented the making of his latest album in real-time, J.Views and Hello Monday teamed up once again to create a new kind of musical experience. It’s the world’s first music video that you, the viewer, direct with every beat of your heart." },
        { name: "The Nature Conservancy", descrName: "Website redesign", textColor: "rgb(255,255,255)", color: "rgba(50, 50, 50,.9)", descr: "Why save a single forest when you can save 100 forests? This is the philosophy of The Nature Conservancy of California, one of the world’s most influential and reliable nonprofit organizations. We created a site experience that showcases the agency’s amazing project content and gave them the digital tools to continue into the future." },
        { name: "Garderobe", descrName: "Fashion meets Social", textColor: "rgb(255,255,255)", color: "rgba(54, 62, 227,.9)", descr: 'Imagine that you can peek into the closets of style icons, raid the racks of every store in the world and curate your own collection of cool clothing. This is the stuff Garderobe is made of. We just added an identity, some well-thought-out UX and a layer of design.' },
        { name: "National Geographic", descrName: "A bear's-Eye View of Yellowstone", textColor: "rgb(90,81,75)", color: "rgba(35, 31, 29,.9)", descr: "Follow the journeys of 4 bears navigating the heart of Yellowstone, as seen from the bears’ own point of view. This groundbreaking research that attaches cameras to bears gives us a lens into the never before seen lives of one of the animal kingdom’s most fearsome beasts." },
        { name: "Residente", descrName: "An interactive exploration of identity", textColor: "rgb(137,137,137)", color: "rgba(50, 50, 50,.9)", descr: "Race, gender and social status are among the many ways we define ourselves, but by focusing on our differences we forget a fundamental truth: deep down, we’re all human. This idea inspired Musician Rene Perez, aka Residente, to take a DNA test and travel the world exploring his roots." }
];

    document.body.onmousemove = function (event) {
        if (isSlide) {
            imgForParalax = $(".current")[0].children[0].children;
            for (var i = 0; i < imgForParalax.length; i++) {

                $(imgForParalax)[i].style.left = -((event.clientX / ((10 - i) * (imgForParalax.length - i + 1))) - ( (slideIndex == 2) ? 50 : -50)) + "px";
                $(imgForParalax)[i].style.top = -(event.clientY / ((10 - i) * (imgForParalax.length - i + 1))) + "px";

            }
        }
    }

    toggleSlide();

    function slideEnd(){
       isSlide = true;
    }


    function toggleSlide()
    {
        $("#name").text(slides[slideIndex].name);
        $('#descr').css("backgroundColor",slides[slideIndex].color);
        $('#descr').css("backgroundColor",slides[slideIndex].color);
        $('#message').text(slides[slideIndex].descr);
        $(".color").css("color", slides[slideIndex].textColor);
        $('#description').text(slides[slideIndex].descrName);
        if(slideIndex == 11)
            $("#description").css("color", "rgb(154,64,77)");
        else if(slideIndex == 8)
            $("#description").css("color", "rgb(236,25,57)");
        else if (slideIndex == 5)
            $("#description").css("color", "rgb(143,117,111)");
        else if (slideIndex == 6 || slideIndex == 4 || slideIndex == 5)
            $("#description").css("color", "rgb(154,154,154)");
        else if (slideIndex == 10)
            $("#description").css("color", "rgb(255,204,0)");
        else if (slideIndex == 9)
            $("#description").css("color", "rgb(0,0,0)");
    }

    function animations() {
        

        $("#message").animate({
            opacity: '0',
            marginBottom: '100px'
        }, 500);

        

        $("#more, #case").animate({
            opacity: '0'
        }, 400);

        $("#name").animate({
            opacity: '0',
            marginBottom: "50px"

        }, 500, toggleSlide);
        /////////////////////////////
        $("#description").animate({
            opacity: '0',
            marginBottom: "100px",

        }, 500);

        $("#description, #name").animate({
            opacity: '1',
            marginBottom: "0",

        }, 500);

        $("#case, #more").animate({
            opacity: '1'
        }, 500);
        
        $("#message").animate({
            opacity: '1',
            marginBottom: '0px'
        }, 500);
    }

    $("#next").click(function (event) {
        if (isSlide == false)
            return;
        isSlide = false;

       
        animations();
        slideIndex++;
        if (counter == slideIndex)
            slideIndex = 0;

        

        $(".current").animate({
            top: "-100%"
        }, 1500, slideEnd);
        $(".next").animate({
            top: "0px"
        }, 1000);
        $(".prev").removeClass('prev');
        $(".current").addClass('prev');
        $(".current").removeClass('current');

        var tmpNext = $(".next");
        $(tmpNext).addClass('current');

        if (slideIndex == counter - 1) {
            $($(".slide-page")[0].children[0]).addClass('next');
        } else {
            $($(tmpNext)[0].nextElementSibling).addClass('next');
            

        }
        $(tmpNext).removeClass('next');
        $(".prev").animate({
            top: "-100%"
        }, 0);
        $(".next").animate({
            top: "100%"
        }, 0);
        imgForParalax = $(".current")[0].children[0].children;
        for (var i = 0; i < imgForParalax.length; i++) {

            $(imgForParalax)[i].style.left = -((event.clientX / ((10 - i) * (imgForParalax.length - i + 1))) + 50) + "px";
            $(imgForParalax)[i].style.top = -(event.clientY / ((10) * (imgForParalax.length - i + 1))) + "px";

        }

    });

    document.onwheel = function (event) {
       
        if(event.deltaY > 0)
            $("#next").click();
        if(event.deltaY < 0)
            $("#prev").click();
    }

    $("#prev").click(function (event) {
        if (isSlide == false)
            return;
        isSlide = false;
       
        animations();
        slideIndex--;
        if (slideIndex == -1)
            slideIndex = counter - 1;


        $(".current").animate({

            top: "100%"
        }, 1200, slideEnd);
        $(".prev").animate({
            top: "0px"
        }, 900);
        $(".next").removeClass('next');
        $(".current").addClass('next');
        $(".current").removeClass('current');

        var tmpPrev = $(".prev");
        $(tmpPrev).addClass('current');
        if (slideIndex == 0) {
            $($(".slide-page")[0].children[counter - 1]).addClass('prev');
        } else {
            $($(tmpPrev)[0].previousElementSibling).addClass('prev');
         

        }
        $(tmpPrev).removeClass('prev');
        $(".prev").animate({
            top: "-100%"
        }, 0);
        $(".next").animate({
            top: "100%"
        }, 0);
         imgForParalax = $(".current")[0].children[0].children;
            for (var i = 0; i < imgForParalax.length; i++) {

                $(imgForParalax)[i].style.left = -((event.clientX / ((10 - i) * (imgForParalax.length - i + 1))) + 50) + "px";
                $(imgForParalax)[i].style.top = -(event.clientY / ((10) * (imgForParalax.length - i + 1))) + "px";

            }

    });


})