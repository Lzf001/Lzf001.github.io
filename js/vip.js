window.onload=function(){
    lazy();
}

function lazy(){
    var clone=null;
    var isOk=false;
    var fixedBox=document.querySelector("#new");
    var height=document.querySelector('.new').offsetTop;
    var loading=document.querySelector('.loading');
    var movies=document.querySelector('.movies');
    var moviesInnerHTML=movies.cloneNode(true);
    // console.log(moviesInnerHTML);
    window.onscroll=function(){
        if(scrollY>height){
            fixedBox.style.display='block';
        }
        else{
            fixedBox.style.display='none';
        }
        var bodyHeight=document.body.offsetHeight;
        var innerHeight=window.innerHeight;
        var scrollTop=window.pageYOffset;

        var distance=bodyHeight-innerHeight-scrollTop;
        if(distance<10){
            loading.style.display='block';
            loading.style.animation="movies 0.5s";    
            loading.style.webkitAnimation="movies 0.5s";
            movies.innerHTML+=moviesInnerHTML.innerHTML;
            loading.addEventListener('animationend',function(){
                loading.style.display='none';
                loading.style.animation='none';
                loading.style.webkitAnimation='none';
            }) 

               
        }
    }
}