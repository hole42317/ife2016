/**
 * Created by lui on 2017/6/2.
 */
/*var fs = require("fs");

var file=fs.readFileSync("data2.json","utf-8");
file=JSON.parse(file.substr(1,file.length-1));

var mainBodyBox=document.getElementById('mainBodyBox');



for(var i= 0,len=file.length;i<len;i++){
    var div=document.createElement('div');
    div.className='mainBody';
    var span1=document.createElement('span');
    var span2=document.createElement('span');
    var span3=document.createElement('span');
    var div2=document.createElement('div');
    var input1=document.createElement('input');
    var input2=document.createElement('input');
    var input3=document.createElement('input');
    var a=document.createElement('a');

    span1.innerHTML=file[i].questionnaire;
    span2.innerHTML=file[i].date;
    span3.innerHTML="OK";
    input1.value="编辑";
    input2.value="删除";
    input3.value="查看问卷";
    input1.type="button";
    input2.type="button";
    input3.type="button";

    a.appendChild(input1);
    a.href="questionnaire"+i+".html";

    div2.appendChild(a);
    div2.appendChild(input2);
    div2.appendChild(input3);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(div2);

    mainBodyBox.appendChild(div);
}*/
show();
var mainBodyBox=document.getElementById('mainBodyBox');
function show(){
    $.getJSON("data2.json", function (file) {
        //alert(data.length);
        for(var i= 0,len=file.length;i<len;i++){
            var div=document.createElement('div');
            div.className='mainBody';
            var span1=document.createElement('span');
            var span2=document.createElement('span');
            var span3=document.createElement('span');
            var div2=document.createElement('div');
            var input1=document.createElement('input');
            var input2=document.createElement('input');
            var input3=document.createElement('input');
           // var a=document.createElement('a');

            span1.innerHTML=file[i].questionnaire;
            span2.innerHTML=file[i].date;
            span3.innerHTML="OK";
            input1.value="编辑";
            input2.value="删除";
            input3.value="查看问卷";
            input1.type="button";
            input2.type="button";
            input3.type="button";
            input1.onclick=(function (i) {
                return function (){
                    //edit(i);
                    doEdit(i);
                }
            })(i);
            input2.onclick=(function(i){
                return function (){
                    deleteQuestionnaire(i);
                }
            })(i);

            //a.appendChild(input1);
           // a.href="questionnaire"+i+".html";

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
}

function edit(data){
  //用于改造页面为编辑
  //  mainBodyBox.innerHTML=data.questionnaire;
    //alert(data.question[1].questionType);
    mainBodyBox.innerHTML="";

    //生成问卷标题
    var div=document.createElement('div');
    div.id='editTitle';
    var questionTitle=document.createElement('h2');
    questionTitle.innerHTML=data.questionnaire;
    div.appendChild(questionTitle);
    mainBodyBox.appendChild(div);

    //生成题目
    for (var i= 0,len=data.question.length;i<len;i++){
        var div1=document.createElement('div');
        div1.className='editQuestion';

        var span1=document.createElement('span');
        var span2=document.createElement('span');
        var span3=document.createElement('span');
        var span4=document.createElement('span');


        var input1=document.createElement('input');


        span1.innerHTML="Q"+(i+1);
        div1.appendChild(span1);

        span2.className='isMust';
        span2.innerHTML='是否必填';
        div1.appendChild(span2);

        input1.type='checkbox';
        input1.className='isMust';
        //div1.appendChild(input1);
/**/  /**/ /**/ /**/
        var questionType=parseInt(data.question[i].questionType);
        switch (questionType){
            case 1:
                span3.innerHTML=' (单选题)';
                var div2=document.createElement('div');
                div2.className='editQuestionSelect';
                break;
            case 2:
                span3.innerHTML=' (多选题)';
                var div2=document.createElement('div');
                div2.className='editQuestionSelect';
                break;
            case 3:
                span3.innerHTML=' (文本题)';
                var div2=document.createElement('textarea');
                div2.className='editQuestionText';
                break;
            default:
                //应该有个东西
                break;
        }
        div1.appendChild(span3);

        span4.innerHTML=" "+data.question[i].questionName;
        div1.appendChild(span4);

        if(questionType==1){
            for (var j= 0,len=data.question[i].select.length;j<len;j++){
                var input=document.createElement('input');
                var span=document.createElement('span');
                var br=document.createElement('br');
                input.type='radio';
                input.name='question'+i;
                span.innerHTML=data.question[i].select[j];
                div2.appendChild(input);
                div2.appendChild(span);
                div2.appendChild(br);
            }

            }
        else if (questionType==2){
            for (var j= 0,len=data.question[i].select.length;j<len;j++){
                var input=document.createElement('input');
                var span=document.createElement('span');
                var br=document.createElement('br');
                input.type='checkbox';
                input.name='question'+i;
                span.innerHTML=data.question[i].select[j];
                div2.appendChild(input);
                div2.appendChild(span);
                div2.appendChild(br);
            }
        }
        div1.appendChild(div2);


        mainBodyBox.appendChild(div1);
    }
}
function deleteQuestionnaire(i){//直接删除多个逗号怎么办
    $.getJSON("data2.json", function (file) {
        //alert(file[i].questionnaire);
        var file2=[];
        for(var j= 0,len=file.length;j<len;j++){
            if(j!=i){
                file2.push(file[j]);
            }
        }
        file=file2;
        alert(file);
        alert(file[0].questionnaire+file[1].questionnaire);
        //将新的file提交给服务器
    })
}

function doEdit(i){
    //alert("ajax go!");
    //var i=0;
    $.ajax({
        type:"get",
        url:"/ajax",
        data:{
            pageCode:i
        },
        success:function(data){
            console.log(data.questionnaire);
            edit(data);
        }
    });
}