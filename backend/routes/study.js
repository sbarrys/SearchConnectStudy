var express = require('express');
var router = express.Router();
const notices= require('../data/notice');
const fs = require('fs')
const multer = require('multer')

router.get('/notice', function(req, res){
    notices.find( (err, post) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json({success : true, result : post});
    })
});

router.post('/create', function(req, res) {

    notices.create(req.body, function (err, post) {
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

router.put('/:id', function(req, res) {
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
router.get("/:id/notice", function(req, res){

    notices.findOne({_id:req.params.id}).select('notice').exec(function (err, result) {
        var temp = result.notice
        res.json({success: true, result: temp});
    })

});

router.post('/:id/notice', function(req, res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.notice.push(req.body) // .. 안되면 직접 대입
        post.save()
        res.json({success: true});
    });

});

router.get('/:id/notice/:idx', function(req, res){

    notices.findOne({_id:req.params.id}).select({notice:{$elemMatch:{_id:req.params.idx}}}).exec(function (err, result) {
        var temp = result.notice
        res.json({success: true, result: temp});
    })

});


//notice edit
router.put('/:id/notice/:idx', function(req, res) {

    notices.findOneAndUpdate(
        {_id:req.params.id, notice:{$elemMatch:{_id:req.params.idx}}},
        {$set:{"notice.$.title":req.body.title,
            "notice.$.content":req.body.content}},
        function (err, result) {
            if (err) return next(err);
            res.json({success: true});
        }
    )

});

//notice delete
router.delete('/:id/notice/:idx', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.notice.pull({_id:req.params.idx}) //
        post.save()
        res.json({success:true})
     })

});

/////보드

router.get("/:id/board", function(req, res){

    notices.find({_id: req.params.id}).select('board').exec(function (err, result) {
        if (err) return res.status(500).send({error: 'database failure'});
        var temp = result.board
        res.json({success: true, result: temp});
    })

});

router.post('/:id/board', function(req, res) {
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.board.push(req.body) // .. 안되면 직접 대입
        post.save()
        res.json({success: true});
    });
});

//board detail
router.get('/:id/board/:idx', function(req, res){

    notices.findOne({_id:req.params.id}).select({board:{$elemMatch:{_id:req.params.idx}}}).exec(function (err, result) {
        var temp = result.board
        res.json({success: true, result: temp});
    })

});

//board edit
router.put('/:id/board/:idx', function(req, res) {

    notices.findOneAndUpdate(
        {_id:req.params.id, board:{$elemMatch:{_id:req.params.idx}}},
        {$set:{"board.$.title":req.body.title,
                "board.$.content":req.body.content}},
        function (err, result) {
            if (err) return next(err);
            res.json({success: true});
        }
    )

});

//board delete
router.delete('/:id/board/:idx', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.board.pull({_id:req.params.idx}) //
        post.save()
        res.json({success:true})
    })

});

//시간표 -ing

router.get("/:id/schedule", function(req, res){

    notices.find({_id: req.params.id}).select('schedule').exec(function (err, result) {
        if (err) return res.status(500).send({error: 'database failure'});
        var temp = result.schedule
        res.json({success: true, result: temp});
    })
});

router.post('/:id/schedule',function (req,res) {
//미완성
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);

        var temp = fs.readFileSync(req.body.path) //안에 Path
        post.schedule.push({data:temp})//writer 추가 ??
        post.save()
        res.json({success: true});
    });

    /*
    var title = req.body.title
    var fileObj = req.files.myFile

    if(fileObj.truncated) {
        var err = new Error("파일 용량 초과")

        next(err)

        return
    }
    var orgFileName=fileObj.originalname
    var filesize = fileObj.size
    var savePath = __dirname+"/../upload"+fileObj.saveFileName

    fs.open(savePath,"r",function (err,fd) {
        var buffer = new Buffer(filesize)
        fs.read(fd,buffer,0,buffer.length,null,function (err, bytes,buffer) {
            var obj ={

            }
        })

    })
    */
})

//schedule delete
router.delete('/:id/schedule/:idx', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.board.pull({_id:req.params.idx})
        post.save()
        res.json({success:true})
    })

});

//schedule detail
router.get('/:id/schedule/:idx', function(req, res){

    notices.findOne({_id:req.params.id}).select({schedule:{$elemMatch:{_id:req.params.idx}}}).exec(function (err, result) {
        var temp = result.schedule
        res.json({success: true, result: temp});
    })

});

//index는 보드 인덱스
router.get('/:id/board/:idx/:index',function (req,res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        var temp = post.board[req.params.index].comment
        res.json({success : true, result : temp});

    });

})

router.post('/:id/board/:idx/:index',function (req,res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.board[req.params.index].comment.push({content:req.body.content}) //
        post.save()
        console.log(post)
        res.json({success: true});
    });
})

router.delete('/:id/board/:idx/:index/:cid', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.board[req.params.index].comment.pull({_id:req.params.cid})
        post.save()
        res.json({success:true})
    })

});

module.exports = router;

