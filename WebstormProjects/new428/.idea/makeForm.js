/**
 * Created by lui on 2017/5/23.
 */
var p10=document.getElementsByClassName('search');
var abc=[
    {
        "brand":"大众",
        "index":"48912001",
        "color":"e57255"
    },
    {
        "brand":"丰田",
        "index":"29307333",
        "color":"EB8357"
    },
    {
        "brand":"奥迪",
        "index":"23139070",
        "color":"EB8357"
    },
    {
        "brand":"本田",
        "index":"22885564"
    },
    {
        "brand":"福特",
        "index":"22324792"
    },
    {
        "brand":"宝马",
        "index":"21444077"
    },
    {
        "brand":"现代",
        "index":"20114969"
    },
    {
        "brand":"起亚",
        "index":"19251680"
    },
    {
        "brand":"奔驰",
        "index":"19172837"
    },
    {
        "brand":"别克",
        "index":"18544027"
    },
]

function aa(){
    /* var ab=document.createElement('div');
    ab.style.height='10px';
    ab.style.width='100%';
    ab.style.backgroundColor='green';*/
    var div=document.createElement('div');
    div.style.cssText="display: flex;align-items: center;justify-content: flex-end;width: 100%"
    var div1=document.createElement('div');
    var div2=document.createElement('div');
    div1.style.cssText="margin-left: 5%";
    div2.style.cssText="height: 10px;width:100%;background-color: green;margin-left: 10%;"
    div.appendChild(div1);
    div.appendChild(div2);
    p10[1].appendChild(div);
}
ab();
function ab(){

    for (var  i= 1,len=p10.length;i<len;i++){
        var div=document.createElement('div');
        div.style.cssText="display: flex;align-items: center;justify-content: flex-start;width: 100%"
        var div1=document.createElement('div');
        div1.innerHTML=abc[i-1].index;
        var div2=document.createElement('div');
        div1.style.cssText="margin-left: 5%";
        div2.style.cssText="height: 10px;margin-left: 10%;"
        if(abc[i-1].color){
            div2.style.backgroundColor="#"+abc[i-1].color;
        }
        else {
            div2.style.backgroundColor='#3B8AC0';
        }
        div2.style.width=abc[i-1].index/1000000+'%';
        div.appendChild(div1);
        div.appendChild(div2);
        p10[i].appendChild(div);
    }
}