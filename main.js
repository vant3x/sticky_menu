(function(){
    let pinged = false;
    let nav = document.querySelector(".nav");
    let stickyScrollPoint = document.querySelector(".hero-image").offsetHeight;


    function pingToTop(){
        if(pinged) return;

        nav.classList.add("pined");

        pinged = true;
    }


    function unPingFromTop(){   
        if(!pinged) return;
        nav.classList.remove("pined");

        pinged = false;
    }


    window.addEventListener('scroll',function(ev){
        let coords = nav.getBoundingClientRect();
        // console.log(coords); imprimir la distancia de  top al hacer scroll
        if(window.scrollY < stickyScrollPoint) return unPingFromTop();
        
        if(coords.top <= 0) return pingToTop();

    })

})();