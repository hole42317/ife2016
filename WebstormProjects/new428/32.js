/**
 * Created by lui on 2017/5/10.
 */
var form1=document.getElementById('setting1');
var set2=document.getElementById('setting2');
var set3=document.getElementById('setting3').getElementsByTagName('form')[0];
var set4=document.getElementById('setting4');
var set5=document.getElementById('setting5');
var add=document.getElementById('add');
var typeSet;
var item=[];
var name,isMust;



//part1 选择类型决定第三个框
function typesetting(){
    if (form1.value=='single'||form1.value=='mul'){
        document.getElementById('setting3').style.display='block';
        set4.style.display='none';
        set5.style.display='none';
    }
    else {
        document.getElementById('setting3').style.display='none';
        set4.style.display='block';
        set5.style.display='block';
    }
    typeSet==form1.value;
}
form1.onchange=function(){
    typesetting();
}


function addselect(){
    var item1=set3.getElementsByTagName('input')[0];
    item=item1.value.trim().split(' ');
    show();
}

function show(){
    for (var i= 0,len=item.length;i<len;i++){
        var newone=document.createElement('span');
        newone.value=item[i];
        newone.innerHTML=item[i];
        var deleteit=document.createElement('input');
        deleteit.type='button';
        deleteit.name='delet';
        deleteit.value='删除';

        newone.appendChild(deleteit);
        set3.appendChild(newone);
    }
    set3.appendChild(document.createElement('br'));
}

function del(event){
    var tar=event.target;
    var ptar=tar.parentNode;
    if(tar.name=='delet'){
        set3.removeChild(ptar);
        var pos=item.indexOf(ptar.innerHTML.slice(0,1));
        item.splice(pos,1);
    }
}

function getName(){
    name=document.getElementById('name').value;
    if(document.getElementsByName('isMust')[0].checked==1){
        isMust=1;
    }
    else if(document.getElementsByName('isMust')[1].checked==1){
        isMust=0;
    }
    else isMust=-1;
}

function newfrom(){
    if (form1.value=='single'){
        var right=document.getElementById('right');
        var newdiv=document.createElement('div');
        var rightform=document.createElement('form');
        right.appendChild(newdiv);
        newdiv.appendChild(rightform);
        for(var i= 0,len=item.length;i<len;i++){
            var newmulselect=document.createElement('input');
            var newlab=document.createElement('lable');
            //newmulselect.onchange=bc(event);
            newmulselect.id="form"+i;
            newmulselect.type='radio';
            newmulselect.name='singleselect';
            newlab.for="form"+i;
            newlab.innerHTML=item[i];
            rightform.appendChild(newmulselect);
            rightform.appendChild(newlab);
            var sub=document.createElement('input');
        }

        var notice1=document.createElement('span');
        var notice2=document.createElement('span');
        notice1.innerHTML='请点选';
        notice2.innerHTML='已点选';
        notice1.style.display='block';
        notice1.style.color='red';
        notice2.style.display='none';
        notice2.style.color='green';
        newdiv.appendChild(notice1);
        newdiv.appendChild(notice2);

        sub.type='submit';
        rightform.appendChild(sub);
        document.getElementById('right').appendChild(document.createElement('br'));

        rightform.onchange=function(){
            ab(event);
        }
    }
    if(form1.value=='mul'){
        var right=document.getElementById('right');
        var newdiv=document.createElement('div');
        var rightform=document.createElement('form');
        right.appendChild(newdiv);
        newdiv.appendChild(rightform);
        //rightform.onchange=bc(event);
        //rightform.onchange=forfun();
        for(var i= 0,len=item.length;i<len;i++){
            var newmulselect=document.createElement('input');
            var newlab=document.createElement('lable');
            //newmulselect.onchange=forfun();
            newmulselect.id="form"+i;
            newmulselect.type='checkbox';
            newlab.for= newmulselect.id;
            newlab.innerHTML=item[i];
            rightform.appendChild(newmulselect);
            rightform.appendChild(newlab);
            var sub=document.createElement('input');
        }
        //rightform.onchange=bc(event);
        var notice1=document.createElement('span');
        var notice2=document.createElement('span');
        notice1.innerHTML='请点选';
        notice2.innerHTML='已点选';
        notice1.style.display='block';
        notice1.style.color='red';
        notice2.style.display='none';
        notice2.style.color='green';
        newdiv.appendChild(notice1);
        newdiv.appendChild(notice2);

        sub.type='submit';
        rightform.appendChild(sub);
        document.getElementById('right').appendChild(document.createElement('br'));
        rightform.onchange=function(){
            bc(event);
        }
    }
}
function forfun(){
    alert('1');
}

//多选提示框
function bc(event){
    var tar=event.target;
    var k=[];
    var form=tar.parentNode;
    var div=form.parentNode;
    // var form=document.getElementsByTagName('form')[1];
    var input=form.getElementsByTagName('input');
    var notice1=div.getElementsByTagName('span')[0];
    var notice2=div.getElementsByTagName('span')[1];

    for(var i= 0,len=input.length;i<len;i++){
        if(form[i].checked) {
            k[i]=1;
        }
    }
    if(k.indexOf(1)>-1){
        notice1.style.display='none';
        notice2.style.display='block';
    }
    else {
        notice1.style.display='block';
        notice2.style.display='none';
    }
}

//单选提示框
function ab(event){
    var form=event.target.parentNode;
    var input=form.getElementsByTagName('input');
    var div=form.parentNode;
    var notice1=div.getElementsByTagName('span')[0];
    var notice2=div.getElementsByTagName('span')[1];
    for(var i= 0,len=input.length;i<len;i++){
        if(input[i].checked) {
            notice1.style.display='none';
            notice2.style.display='block';
            break;
        }
    }
}