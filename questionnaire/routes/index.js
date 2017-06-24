var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('page1.html');
});
router.get("/page1",function(req,res,next){
    res.render('page1.html');
});
router.get("/page2",function(req,res){
    res.render('page2.html');
});
router.get("/newQuestion",function(req,res){
    res.render('newQuestion.html');
});
router.get("/getTest",function(req,res){
    //console.log(req);
    console.log(req.body);
    res.render('getTest.html');
});
router.post("/save", function (req, res, next) {
    console.log(req.body); // => { 'info[name]': 'henry','info[age]': '30','hobby[1]': 'sport','hobby[2]': 'coding' }
});
router.get("/editPage",function(req,res,next){
    res.render("editPage");
});


router.get('/1.txt', function(req, res, next) {
    fs.readFileSync('C:/Users/lui/WebstormProjects/question/abc/public/data2.json','utf-8',function(err,data){
        if (err){
            res.send("error");
            console.log("error");
        }else {
            res.render('my',{data:JSON.parse(data)});
            console.log("ok");
        }

    });
});



router.get("/2333",function(req,res,next){
    var iab="111";
    res.render("ejsTest",{code:iab});
    res.render("ejsTest");
});

router.get("/ajax",function(req,res,next){
    //res.send("123123");
    fs.readFile('C:/Users/lui/WebstormProjects/question/abc/public/data2.json','utf-8',function(err,data){
        if(err){
            res.send("error");
            console.log("err")
        }
        else {
            var jData=JSON.parse(data.slice(1,data.length));
            console.log(jData[1]);
            res.send(jData[req.query.pageCode]);
            //res.send(data[0]);
             //res.send(data);

            //res.end();
           //console.log(jjData[req.query.pageCode].question);
        }
    });
    //console.log(req.query.pageCode+1);
});


module.exports = router;
