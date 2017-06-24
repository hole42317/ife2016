/**
 * Created by lui on 2017/6/2.
 */
var mainBodyBox=document.getElementById('mainBodyBox');
$.getJSON("C:\Users\lui\WebstormProjects\question\.idea\data.json", function (data) {
    //alert(data.length);
    for(var i= 0,len=data.length;i<len;i++){
        var div=document.createElement('div');
        div.className='mainBody';
        var span1=document.createElement('span');
        var span2=document.createElement('span');
        var span3=document.createElement('span');
        var div2=document.createElement('div');
        var input1=document.createElement('input');
        var input2=document.createElement('input');
        var input3=document.createElement('input');

        span1.innerHTML=data[i].question;
        span2.innerHTML=data[i].date;
        span3.innerHTML="OK";
        input1.value="编辑";
        input2.value="删除";
        input3.value="查看问卷";
        input1.type="button";
        input2.type="button";
        input3.type="button";

        div2.appendChild(input1);
        div2.appendChild(input2);
        div2.appendChild(input3);

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(div2);

        mainBodyBox.appendChild(div);
    }


});