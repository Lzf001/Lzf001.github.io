window.onload=function(){
    navSwipe();
    banner();
}

function navSwipe(){
    var parentBox=document.querySelector('.tx_header_nav');
    var childrenBox=parentBox.querySelector('ul');
    var h=parentBox.offsetWidth;
    var H=childrenBox.offsetWidth;

  
    var distance=100;
    var minPosition=-(H-h);
    
    var maxPosition=0;
    var minSwipe=-(H-h)-distance;
    var maxSwipe=distance;
    var currX=0;
    var startX=0;
    var moveX=0;
    var isMove=false;

    childrenBox.addEventListener('touchstart',function(event){
        startX=event.touches[0].clientX;
    })
    childrenBox.addEventListener('touchmove',function(event){
        isMove=true;
        moveX=event.touches[0].clientX;
        console.log(moveX);
        if(currX+moveX-startX<maxSwipe&&currX+moveX-startX>minSwipe){
            lzf.removeTransition(childrenBox);
            lzf.setTranslateX(childrenBox,currX+moveX-startX);
        }
    })
    childrenBox.addEventListener('touchend',function(){
        if(isMove){
            if(currX+moveX-startX>maxPosition){
                currX=maxPosition;
            }
            else if(currX+moveX-startX<minPosition){
                currX=maxPosition;
            }
            else{
                currX=currX+moveX-startX;
            }
            // console.log(currX);
            // console.log(minPosition);
            lzf.addTransition(childrenBox);
            lzf.setTranslateX(childrenBox,currX);
        }
    })

}

function banner(){
    var banner=document.querySelector('.banner');
    var width=banner.offsetWidth;
    var imgBox=banner.children[0];
    var points=document.querySelector('.points');
    var index=0;
    var timer=setInterval(function(){
        index++;
        lzf.addTransition(imgBox);
        lzf.setTranslateX(imgBox,-index*width);
    },3000)

    lzf.addEvent(imgBox,function(){
        if(index>=7){
            index=1;
        }
        else if(index<=0){
            index=6;
        }
        lzf.removeTransition(imgBox);
        lzf.setTranslateX(imgBox,-index*width);
        points.innerHTML=index;
    })

    var startX=0;
    var moveX=0;
    var distance=0;
    var isMove=false;

    imgBox.addEventListener('touchstart',function(event){
        clearInterval(timer);
        startX=event.touches[0].clientX;
    })
    imgBox.addEventListener('touchmove',function(event){
        isMove=true;
        moveX=event.touches[0].clientX;
        distance=moveX-startX;
        lzf.removeTransition(imgBox);
        lzf.setTranslateX(imgBox,-index*width+distance);
    })
    imgBox.addEventListener('touchend',function(){
        if(isMove){
            if(Math.abs(distance)>width/3){
                if(distance<0){
                    index++;
                }
                else if(distance>0){
                    index--;
                }
            }
            lzf.addTransition(imgBox);
        lzf.setTranslateX(imgBox,-index*width);
        }
        startX=0;
        moveX=0;
        distance=0;
        isMove=false;
        clearTimeout(timer);
        timer=setInterval(function(){
            index++;
            lzf.addTransition(imgBox);
            lzf.setTranslateX(imgBox,-index*width);
        },3000)
    })
}