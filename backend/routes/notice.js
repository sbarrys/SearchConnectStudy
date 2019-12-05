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

    notices.findOne({_id:req.params.id}).select('notice').exec(function (err, result) {
        var temp = result.notice //이렇게 보내야됨 나중에 요청 들어왔을때
        res.json({success: true, result: temp});
    })

});

router.post('/study/:id/notice/create', function(req, res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.notice.push(req.body) // .. 안되면 직접 대입
        post.save()
        res.json({success: true});
    }); //이게 최종 push

});

router.get('/study/:id/notice/detail/:idx', function(req, res){

    notices.findOne({_id:req.params.id}).select('notice').exec(function (err, result) {
        if (err) return next(err);
        var temp = result.notice ;
        var dum = temp[req.params.nowIndex];
        res.json({success : true, result : dum});

    })
    //okok

});

router.put('/study/:id/notice/edit/:idx', function(req, res) {

    notices.findOneAndUpdate(
        {_id:req.params.id, notice:{$elemMatch:{_id:req.body._id}}},
        {$set:{"notice.$.title":req.body.title,
            "notice.$.content":req.body.content}},
        function (err, result) {
            if (err) return next(err);
            res.json({success: true});
        }
    ) //완성

});

router.delete('/study/:id/notice/:idx', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.notice.pull({_id:req.body._id}) //
        post.save()
        res.json({success:true})
     })//c최종 딜리트

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

router.get('/study/:id/board/detail/:idx', function(req, res){

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.findOne({'board._id':req.body.noticeID}).select('board').exec(function (err,result) {
            res.json({success : true, result : result});
        })
    });

});

router.put('/study/:id/board/edit/:idx', function(req, res) {
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

router.delete('/study/:id/board/:idx', (req, res) => {

    notices.board.pull({_id:req.body.noticeID})
    notices.save();
    res.json({success:true})

});

module.exports = router;