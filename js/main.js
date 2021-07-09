let slideimages = document.querySelectorAll('.slide'),
    arrowLeft  = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    current    = 0;



    function reset(){
        for(let i=0 ;i<slideimages.length; i++){
            slideimages[i].style.display = 'none';
        }
    }

    function startslide(){
        reset();
        slideimages[0].style.display = 'block';
    }


   function slideleft(){
       reset();
       slideimages[current - 1].style.display = 'block';
       current--;
   }

   function slideright(){
    reset();
    slideimages[current + 1].style.display = 'block';
    current++;
    }

   arrowLeft.addEventListener('click',function(){
       if(current === 0){
            current = slideimages.length;
       }
       slideleft();
   })

   arrowRight.addEventListener('click',function(){
    if(current === slideimages.length-1){
         current = -1;
    }
    slideright();
})

    startslide();





















