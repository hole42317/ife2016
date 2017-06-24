/**
 * Created by lui on 2017/5/21.
 */
calendar=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function showCalendar(){
    var bigbox=document.getElementById('box');
    bigbox.innerHTML='';
    for(var i=0;i<7;i++){
        var smallbox=document.createElement('div');
        smallbox.className='box1';
        smallbox.innerHTML='周'+(i+1);
        bigbox.appendChild(smallbox);
    }
    for(var i=0;i<42;i++){
        var smallbox=document.createElement('div');
        smallbox.className='box1';
        smallbox.innerHTML=calendar[i];
        if(calendar[i]-i>6){
            smallbox.style.color='grey';
            smallbox.className='last';
        }
        if(i-calendar[i]>10){
            smallbox.style.color='grey';
            smallbox.className='next';
        }
        bigbox.appendChild(smallbox);
    }
}
showCalendar();
