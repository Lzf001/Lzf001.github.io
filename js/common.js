window.lzf={};

lzf.removeTransition=function(obj){
    obj.style.transition="none";
    obj.style.webkitTransition="none";
}

lzf.setTranslateX=function(obj,translate){
    obj.style.transform=`translateX(${translate}px)`;
    obj.style.webkitTransform=`translateX(${translate}px)`;
}

lzf.addTransition=function(obj){
    obj.style.transition="all 0.5s";
    obj.style.webkitTransition="all 0.5s";
}

lzf.addEvent=function(obj,callback){
    obj.addEventListener('transitionEnd',callback);
    obj.addEventListener('webkitTransitionEnd',callback);
}