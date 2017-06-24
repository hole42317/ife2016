/**
 * Created by lui on 2017/5/19.
 */
var titleBox=document.getElementById('titleBox');
var titleRight=titleBox.getElementsByClassName('titleRight');

for(var i= 0,len=titleRight.length;i<len;i++){
    titleRight[i].onmouseover=(function(i){
        return function (){titleRight[i].style.borderBottom='2px solid green';}
    })(i)
}
for(var i= 0,len=titleRight.length;i<len;i++){
    titleRight[i].onmouseout=(function(i){
        return function (){titleRight[i].style.borderBottom='none';}
    })(i)
}