var userid=document.getElementById('idvalue');
var trybtn=document.getElementById('try');
var pswvalue=document.getElementById('pswvalue');
var pswvalue2=document.getElementById('pswvalue2');
var abc=[0,0,0];
var form=document.getElementById('su');




var co=/[^a-zA-Z0-9_\u4e00-\u9fa5]+$/g;//匹配非法字符
var replace=/[\u4e00-\u9fa5]/ig
// var em=/\
function sub(event){
    if (abc.indexOf(0)>-1){
        alert('error');
        return false;
    }
    else {
        alert('ok');
        return true;
    }
}

function useridtest(){
    var no1=document.getElementById('idnotice1');//correct
    var no2=document.getElementById('idnotice2');//false
    var no3=document.getElementById('idnotice3');//empty
    var no4=document.getElementById('idnotice4');//long or short
    if (!userid.value){
        //显示空
        userid.style.borderColor='red'
        no1.style.display='none';
        no2.style.display='none';
        no3.style.display='block';
        no4.style.display='none';
        abc[0]=0;
    }
    else if(co.test(userid.value)){
        //显示字符非法
        userid.style.borderColor='red'
        no1.style.display='none';
        no2.style.display='block';
        no3.style.display='none';
        no4.style.display='none';
        abc[0]=0;
    }
    else {
        if (userid.value.replace(replace,"ab").length>16||userid.value.replace(replace,"ab").length<4){
            //显示长度不合法
            userid.style.borderColor='red'
            no1.style.display='none';
            no2.style.display='none';
            no3.style.display='none';
            no4.style.display='block';
            abc[0]=0;
        }
        else {
            //显示合法
            userid.style.borderColor='green'
            no1.style.display='block';
            no2.style.display='none';
            no3.style.display='none';
            no4.style.display='none';
            abc[0]=1;
        }
    }

}
userid.addEventListener("focusout",useridtest);

function pswtest(){
    var no1=document.getElementById('pswnotice1');//correct
    var no2=document.getElementById('pswnotice2');//false
    var no3=document.getElementById('pswnotice3');//empty
    var no4=document.getElementById('pswnotice4');//long or short
    if (!pswvalue.value){
        //显示空
        pswvalue.style.borderColor='red'
        no1.style.display='none';
        no2.style.display='none';
        no3.style.display='block';
        no4.style.display='none';
        abc[1]=0;
    }
    else if(co.test(pswvalue.value)){
        //显示字符非法
        pswvalue.style.borderColor='red'
        no1.style.display='none';
        no2.style.display='block';
        no3.style.display='none';
        no4.style.display='none';
        abc[1]=0;
    }
    else {
        if (pswvalue.value.replace(replace,"ab").length>16||pswvalue.value.replace(replace,"ab").length<4){
            //显示长度不合法
            pswvalue.style.borderColor='red'
            no1.style.display='none';
            no2.style.display='none';
            no3.style.display='none';
            no4.style.display='block';
            abc[1]=0;
        }
        else {
            //显示合法
            pswvalue.style.borderColor='green'
            no1.style.display='block';
            no2.style.display='none';
            no3.style.display='none';
            no4.style.display='none';
            abc[1]=1;
        }
    }

}
pswvalue.addEventListener("focusout",pswtest);


function pswtest2(){
    var no1=document.getElementById('pswnotice12');//correct
    var no2=document.getElementById('pswnotice22');//false
    var no3=document.getElementById('pswnotice32');//empty
    if(!pswvalue2.value){
        no1.style.display='none';
        no2.style.display='none';
        no3.style.display='block';
        abc[2]=0;
    }

    if (pswvalue2.value==pswvalue.value){
        //显示正确
        no1.style.display='block';
        no2.style.display='none';
        no3.style.display='none';
        abc[2]=1;
    }
    else {
        //显示错误
        no1.style.display='none';
        no2.style.display='block';
        no3.style.display='none';
        abc[2]=0;
    }

}
pswvalue2.addEventListener("focusout",pswtest2);