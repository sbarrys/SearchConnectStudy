var express = require('express');
var router = express.Router();
const notices= require('../data/notice');


router.get('/notice', function(req, res){
    notices.find( (err, post) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json({success : true, result : post});
    })
});

router.post('/create', function(req, res) {


    var temp = new notices()
    temp.studyType = req.body.studyType;
    temp.studyName = req.body.studyName;
    temp.writer = req.body.writer;
    temp.maxMember = req.body.maxMember;
    temp.title = req.body.title;
    temp.content = req.body.content;

    //temp.notice.push({writer:"yebin",title:"bin",content:"ddd"})
    //temp.notice.push({writer:"ysds",title:"sdds",content:"sdw"})

    console.log(temp.notice)
   // notices.notice.push(temp)
    temp.save()
    res.json({success:true})

   // notices.notice.push({writer:req.body.writer,title:req.body.title,content:req.body.content});//
    //notices.save();

  //  res.json({success:true})


     notices.notice.create({
            writer:"de",
            title:"dd",
            content:"oko"
        })
        notices.save();

    notices.notice.create(req.body, function (err, post) {
        if (err) return console.log(err);
        else {
            res.json({success: true});
        }
    });

});

router.get('/:id', function(req, res){
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json({success : true, result : post});
    });

});
router.put('/edit/:id', function(req, res) {
    notices.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) res.json({success:false, message:'cannot find notice'})
        else res.json({success:true});
    });
});
router.delete('/:id', (req, res) => {

    notices.remove({ _id: req.params.id }, (err, output) => {
        if(err) return res.status(500).json({ error: "database failure" });
        else {
            res.json({success:true})
            res.status(204).end();
        }
    })
});

///
router.get("/study/:id/notice", function(req, res){

    notices.find({_id: req.params.id}).select('notice').exec(function (err, result) {
        if (err) return res.status(500).send({error: 'database failure'});
        res.json({success: true, result: result});
    })

});

router.post('/study/:id/notice/create', function(req, res) {
    notices.notice.push({writer:req.body.writer,title:req.body.title,content:req.body.content});//
    notices.save();

});

router.get('/study/:id/notice/detail/:id', function(req, res){

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.findOne({'notice._id':req.body.noticeID}).select('notice').exec(function (err,result) {
            res.json({success : true, result : result});
        })
    });

});

router.put('/study/:id/notice/edit/:id', function(req, res) {
/////
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.findOne({'notice._id':req.body.noticeID}),function (err,result) {
           // result.
            res.json({success : true, result : result});
        }
    });

    notices.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) res.json({success:false, message:'cannot find notice'})
        else res.json({success:true});
    });
});

router.delete('/study/:id/notice/:id', (req, res) => {

    notices.notice.pull({_id:req.body.noticeID})
    notices.save();
    res.json({success:true})

});

/////보드

router.get("/study/:id/board", function(req, res){

    notices.find({_id: req.params.id}).select('board').exec(function (err, result) {
        if (err) return res.status(500).send({error: 'database failure'});
        res.json({success: true, result: result});
    })

});

router.post('/study/:id/board/create', function(req, res) {
    notices.board.push({writer:req.body.writer,title:req.body.title,content:req.body.content});//
    notices.save();

});

router.get('/study/:id/board/detail/:id', function(req, res){

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.findOne({'board._id':req.body.noticeID}).select('board').exec(function (err,result) {
            res.json({success : true, result : result});
        })
    });

});

router.put('/study/:id/board/edit/:id', function(req, res) {
/////
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.findOne({'board._id':req.body.noticeID}),function (err,result) {
           // result.
            res.json({success : true, result : result});
        }
    });

    notices.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) res.json({success:false, message:'cannot find notice'})
        else res.json({success:true});
    });
});

router.delete('/study/:id/board/:id', (req, res) => {

    notices.board.pull({_id:req.body.noticeID})
    notices.save();
    res.json({success:true})

});

module.exports = router;