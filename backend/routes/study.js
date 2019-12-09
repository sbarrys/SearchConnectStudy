var express = require('express');
var router = express.Router();
const Study= require('../models/studySchema');
const notices = require('../data/notice');
var User = require('../models/userSchema');
var util = require('../models/util');
const Post=require('../models/postSchema');

//전체목록조회
router.get('/', function (req, res) {
    Study.find().populate('writer').exec((err, post) => {
        if (err) return res.status(500).send({ error: 'database failure' });
        res.json({ success: true, result: post });
    })
});
//스터디 생성
router.post('/', function (req, res) {
    var study= new Study();
    study.studyType=req.body.studyType;
    study.maxMember=req.body.maxMember;
    study.studyName=req.body.studyName;
    study.title=req.body.title;
    study.content=req.body.content;
    study.writer=req.body.writer;
    study.save(function(err,study){
        if(err){

            res.json(util.successFalse(err));
        }

        res.json(util.successTrue(study));

    });
});

//스터디 조회 
router.get('/:id', function (req, res) {
    console.log(req.params.id)
    Study.findById(req.params.id).populate([{path:'studyMember'},{path:'writer'}]).exec(function (err, study) {
        if (err) res.json(util.successFalse(err));
        res.json(util.successTrue(study));
    });
});
//스터디 수정
router.put('/:id', function (req, res) {
    Study.findByIdAndUpdate(req.params.id, req.body, function (err, study) {
        if (err) res.json(util.successFalse(err))
        else res.json(util.successTrue(study));
    });
});
//스터디삭제
router.delete('/:id', (req, res) => {

    Study.remove({ _id: req.params.id }, (err, output) => {
        if (err) return res.status(500).json({ error: "database failure" });
        else {
            res.json(util.successTrue(output));
        }
    })
});

//신청버튼 누를 경우 유저에 스터디등록, 스터디에 유저등록
router.put('/:id/member/:idx', async function (req, res) {
    await User.findByIdAndUpdate(
        req.params.idx,
        { $addToSet: { studyList: req.params.id } },
        { safe: true, new: true },
        function (err, model) {
            if (err) res.json(util.successFalse(err));
        }
    );
    await Study.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { "studyMember": req.params.idx } },
        { safe: true, upsert: true, new: true, useFindAndModify: false },
        function (err, model) {
            if (err) res.json(util.successFalse(err));
        }
    );
    await res.json(util.successTrue());


});


//해당하는 스터디에 notice를 추가해준다.
router.post('/:id/notice', async function (req, res) {
    
    var post = new Post({
        fromstudy : req.params.id,
        title :req.body.title,
        content: req.body.content,
        writer: req.body.writer
    });
     
    await post.save(function(err, result){
        console.log(result.fromstudy, result.title);
         if(err) res.json(util.successFalse(err));
    });
    
    
    

    await Study.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { notice: post._id } },
        { safe: true, new: true },
        function (err, model) {
            if (err) res.json(util.successFalse(err));
            else res.json(util.successTrue());

        }
    );
});

//study에해당하는 notice를 출력해 준다.
router.get("/:id/notice", function (req, res) {
    Study.findOne({ _id: req.params.id }).select('notice')
    .populate({
        path:'notice',
        populate:{
            path:'writer'
        }
    }).exec(function(err,notice){
        res.json(util.successTrue(notice));
    })
})

//해당하는 스터디의 idx에 해당하는 notice를 리턴한다.
router.get('/:id/notice/:idx', function (req, res) {
    Post.findById(req.params.idx).populate('writer').exec(function(err,result){
        console.log(result);
    })

});

//이거수정
//해당하는 id 의 study 에 idx 아이디를 가진 notice수정
router.put('/:id/notice/:idx', function (req, res) {

     Post.findByIdAndUpdate(
        req.params.idx,
        { $set: { title: req.body.title , content:req.body.content } },
        { safe: true, new: true },
        function (err, post) {
            if (err) res.json(util.successFalse(err));
            else res.json(util.successTrue(post));
        }
    );
});

//notice delete
router.delete('/:id/notice/:idx', (req, res) => {

        //포스트 삭제
        Post.findByIdAndDelete(req.params.idx).exec(function(err){
            if(err) res.json(util.successFalse(err));
            else res.json(util.successTrue());

        });
        
        Study.findById(req.params.id).exec(function(err,study){
            if(err) res.json(util.successFalse(err));
            study.notice.splice(study.notice.indexOf(req.params.idx),1)
            study.save();
            if(err)res.json(util.successFalse(err));
             else res.json(util.successTrue(study));
        })

});
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////여기부터 다시하기/////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/////보드
//해당하는 스터디에 board 추가해준다.
router.post('/:id/board', async function (req, res) {
    
    var post = new Post({
        fromstudy : req.params.id,
        title :req.body.title,
        content: req.body.content,
        writer: req.body.writer
    });
     
    await post.save(function(err, result){
        console.log(result.fromstudy, result.title);
         if(err) res.json(util.successFalse(err));
    });
    
    
    

    await Study.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { board: post._id } },
        { safe: true, new: true },
        function (err, model) {
            if (err) res.json(util.successFalse(err));
            else res.json(util.successTrue());

        }
    );
});

//study에해당하는 board 출력해 준다.
router.get("/:id/board", function (req, res) {
    Study.findOne({ _id: req.params.id }).select('board')
    .populate({
        path:'board',
        populate:{
            path:'writer'
        }
    }).exec(function(err,board){
        res.json(util.successTrue(board));
    })
})

//해당하는 스터디의 idx에 해당하는 board 리턴한다.
router.get('/:id/board/:idx', function (req, res) {
    Post.findById(req.params.idx).populate('writer').exec(function(err,result){
        console.log(result);
    })

});

//이거수정
//해당하는 id 의 study 에 idx 아이디를 가진 board수정
router.put('/:id/board/:idx', function (req, res) {

     Post.findByIdAndUpdate(
        req.params.idx,
        { $set: { title: req.body.title , content:req.body.content } },
        { safe: true, new: true },
        function (err, post) {
            if (err) res.json(util.successFalse(err));
            else res.json(util.successTrue(post));
        }
    );
});

//board delete
router.delete('/:id/board/:idx', (req, res) => {

        //포스트 삭제
        Post.findByIdAndDelete(req.params.idx).exec(function(err){
            if(err) res.json(util.successFalse(err));
            else res.json(util.successTrue());

        });
        
        Study.findById(req.params.id).exec(function(err,study){
            if(err) res.json(util.successFalse(err));
            study.board.splice(study.board.indexOf(req.params.idx),1)
            study.save();
            if(err)res.json(util.successFalse(err));
             else res.json(util.successTrue(study));
        })

});

//assignment
router.get('/:id/assignment', function (req, res) {
    notices.findOne({ _id: req.params.id }).select('assignment').populate('writer').exec(function (err, result) {
        var temp = result.assignment
        if (err) res.json({ success: false, result: err });
        else res.json({ success: true, result: temp });
    })
});
router.post('/:id/assignment', function (req, res) {
    notices.findById(req.params.id, function (err, post) {
        if (err) { res.json(util.successFalse(err)) }
        else {
            post.assignment.push(req.body)
            post.save()
            res.json({ success: true });
        }
    });
});
router.get('/:id/assignment/:idd', function (req, res) {
    notices.findOne({ _id: req.params.id }).select('assignment').exec(function (err, result) {
        if (err) return next(err);
        var temp = result.assignment;
        var dum = temp[req.body.nowIndex];
        res.json({ success: true, result: dum });

    })
});
router.put('/:id/assignment/submit/:idd', function (req, res) {
    notices.findOneAndUpdate(
        { _id: req.params.id, assignment: { $elemMatch: { _id: req.body._id } } },
        {
            $set: {
                "assignment.$.file": req.body.file
            }
        },
        function (err, result) {
            if (err) return next(err);
            res.json({ success: true });
        }
    )
});
router.delete('/:id/assignment/:idd', (req, res) => {
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.assignment.pull({ _id: req.body._id })
        post.save()
        res.json({ success: true })
    })
});

module.exports = router;