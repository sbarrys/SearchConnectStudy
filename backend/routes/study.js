var express = require('express');
var router = express.Router();
const notices = require('../data/notice');
const fs = require('fs')
// const multer = require('multer')
var User = require('../models/UserSchema');
var util = require('../models/util');


router.get('/notice', function (req, res) {
    notices.find().populate('writer').exec((err, post) => {
        if (err) return res.status(500).send({ error: 'database failure' });
        res.json({ success: true, result: post });
    })
});

router.post('/create', function (req, res) {
    notices.create(req.body, function (err, post) {
        if (err) return console.log(err)
        else {
            res.json({ success: true });
        }
    });
});
router.get('/:id/membersScheduleImg',function(req,res){
    notices.findById(req.params.id).select('studyMember').populate('studyMember').exec(function(err,study){
        var size= study.studyMember.length
        var temp = new Array();
        let i=0
        for(i; i<size ;i++){
            temp[i]=study.studyMember[i]['scheduleImg'];
        }
        console.log(temp);
        if(err) res.json(util.successFalse(err));

        else
        res.json(util.successTrue(temp));
    })

});

router.get('/:id', function (req, res) {
    notices.findById(req.params.id).populate('writer').exec(function (err, post) {
        if (err) return next(err);
        res.json({ success: true, result: post });
    });
});

router.put('/:id', function (req, res) {
    notices.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) res.json({ success: false, message: 'cannot find notice' })
        else res.json({ success: true });
    });
});
router.delete('/:id', (req, res) => {

    notices.remove({ _id: req.params.id }, (err, output) => {
        if (err) return res.status(500).json({ error: "database failure" });
        else {
            res.json({ success: true })
            res.status(204).end();
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
    await notices.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { "studyMember": req.params.idx } },
        { safe: true, upsert: true, new: true, useFindAndModify: false },
        function (err, model) {
            if (err) res.json(util.successFalse(err));
        }
    );
    await res.json(util.successTrue());


});

///
router.get("/:id/notice", function (req, res) {
    
    notices.findOne({ _id: req.params.id }).select('notice').populate('notice.writer').exec(function (err, result) {
        var temp = result.notice
        res.json({ success: true, result: temp });
    })

});

router.post('/:id/notice', function (req, res) {
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.notice.push(req.body) // .. 안되면 직접 대입
        post.save()
        res.json({ success: true });
    });

});

router.get('/:id/notice/:idx', function (req, res) {

    notices.findOne({ _id: req.params.id }).select({ notice: { $elemMatch: { _id: req.params.idx } } }).exec(function (err, result) {
        var temp = result.notice
        res.json({ success: true, result: temp });
    })

});


//notice edit
router.put('/:id/notice/:idx', function (req, res) {

    notices.findOneAndUpdate(
        { _id: req.params.id, notice: { $elemMatch: { _id: req.params.idx } } },
        {
            $set: {
                "notice.$.title": req.body.title,
                "notice.$.content": req.body.content
            }
        },
        function (err, result) {
            if (err) return next(err);
            res.json({ success: true });
        }
    )

});

//notice delete
router.delete('/:id/notice/:idx', (req, res) => {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.notice.pull({ _id: req.body._id }) //
        post.save()
        res.json({ success: true })
    })

});

/////보드

router.get("/:id/board", function (req, res) {

    notices.find({ _id: req.params.id }).select('board').exec(function (err, result) {
        if (err) return res.status(500).send({ error: 'database failure' });
        var temp = result.board
        res.json({ success: true, result: temp });
    })

});

router.post('/:id/board', function (req, res) {
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.board.push(req.body) // .. 안되면 직접 대입
        post.save()
        res.json({ success: true });
    });
});

//board detail
router.get('/:id/board/:idx', function (req, res) {

    notices.findOne({ _id: req.params.id }).select({ board: { $elemMatch: { _id: req.params.idx } } }).exec(function (err, result) {
        var temp = result.board
        res.json({ success: true, result: temp });
    })

});

//board edit
router.put('/:id/board/:idx', function (req, res) {

    notices.findOneAndUpdate(
        { _id: req.params.id, board: { $elemMatch: { _id: req.params.idx } } },
        {
            $set: {
                "board.$.title": req.body.title,
                "board.$.content": req.body.content
            }
        },
        function (err, result) {
            if (err) return next(err);
            res.json({ success: true });
        }
    )

});

//board delete
router.delete('/:id/board/:idx', (req, res) => {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.board.pull({ _id: req.params.idx }) //
        post.save()
        res.json({ success: true })
    })

});

//시간표 -ing

router.get("/:id/schedule", function (req, res) {

    notices.find({ _id: req.params.id }).select('schedule').exec(function (err, result) {
        if (err) return res.status(500).send({ error: 'database failure' });
        var temp = result.schedule
        res.json({ success: true, result: temp });
    })
});
// router.post('/:id/schedule', function (req, res) {

//     notices.findById(req.params.id, function (err, post) {
//         if (err) return next(err);

//         //태윤 // upload 할때 req.body 에  title ,myFile, 
//         var fileObj = req.files.myFIle; //파일객체
//         if (fileObj.truncated) {
//             var err = new Error("파일용량이 16mb를 초과하였습니다.");
//             req.json(util.successFalse(err));
//         }
//         var orgFileName = fileObj.originalname; //원본파일명 저장
//         var filesize = fileObj.size;//파일사이즈저장
//         var savePath = _dirname + "../upload/" + orgFileName;
//         //파일시스템에서 파일 읽기




//         //파일 path
//         //var temp =fs.readFileSync(req.body.data) ///
//         var temp = fs.readFileSync(req.body.data) //안에 Path
//         post.schedule.push({ data: temp })
//         //writer 추가 ??
//         post.save()
//         res.json({ success: true });
//     });


// })

//schedule delete
router.delete('/:id/schedule/:idx', (req, res) => {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.board.pull({ _id: req.params.idx })
        post.save()
        res.json({ success: true })
    })

});
//schedule detail
router.get('/:id/schedule/:idx', function (req, res) {

    notices.findOne({ _id: req.params.id }).select({ schedule: { $elemMatch: { _id: req.params.idx } } }).exec(function (err, result) {
        var temp = result.schedule
        res.json({ success: true, result: temp });
    })

});

router.get('/:id/lecturenote', function (req, res) {
    notices.findOne({ _id: req.params.id }).select('lecture').exec(function (err, result) {
        var temp = result.lecture
        res.json({ success: true, result: temp });
    })
});
router.post('/:id/lecturenote/create', function (req, res) {
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.lecture.push(req.body)
        post.save()
        res.json({ success: true });
    });
});

router.put('/:id/lecturenote/edit/:idd', function (req, res) {
    notices.findOneAndUpdate(
        { _id: req.params.id, lecture: { $elemMatch: { _id: req.body._id } } },
        {
            $set: {
                "lecture.$.title": req.body.title,
                "lecture.$.content": req.body.content,
                "lecture.$.file": req.body.file
            }
        },
        function (err, result) {
            if (err) return next(err);
            res.json({ success: true });
        }
    )
});
router.delete('/:id/lecturenote/:idd', (req, res) => {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.lecture.pull({ _id: req.body._id })
        post.save()
        res.json({ success: true })
    })
});
//

//index는 보드 인덱스
router.get('/:id/board/:idx/:index', function (req, res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        var temp = post.board[req.params.index].comment
        res.json({ success: true, result: temp });

    });

})

router.post('/:id/board/:idx/:index', function (req, res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.board[req.params.index].comment.push({ content: req.body.content }) //
        post.save()
        console.log(post)
        res.json({ success: true });
    });
})

router.delete('/:id/board/:idx/:index/:cid', (req, res) => {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err)
        post.board[req.params.index].comment.pull({ _id: req.params.cid })
        post.save()
        res.json({ success: true })
    })
});

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
/*
*    var title = req.body.title;
    var fileObj = req.files.myFile;
    if(fileObj.truncated){
        var err = new Error("16MB");
        next(err);
        return;
    }
    var orgFileName = fileObj.originalname;
    var filesize = fileObj.size;
    var savePath = __dirname + "/../upload/" + saveFileName;
    fs.open(savePath, "r", function(err, fd){
        var buffer = new Buffer(filesize);
        fs.read(fd, buffer, 0, buffer.length, null, function(err, bytes, buffer){
            var obj={
                "title":title,
                "filename":orgFileName,
                "filesize":filesize,
                "file":buffer
            };
            var newData = new DBData(obj);
            newData.save(function(err){
                if(err) res.send(err);
                fs.unlink(savePath, function(){});
                res.end();
            });
        });
    });
    *
    *  var tmp = new notices();
    var title = req.body.title;
    var fileObj = req.files.myFile;
    if(fileObj.truncated){
        var err = new Error("16MB");
        next(err);
        return;
    }
    var orgFileName = fileObj.originalname;
    var filesize = fileObj.size;
    var savePath = __dirname + "/../upload/" + saveFileName;
    fs.open(savePath, "r", function(err, fd){
        var buffer = new Buffer(filesize);
        fs.read(fd, buffer, 0, buffer.length, null, function(err, bytes, buffer){
            var obj={
                "title":title,
                "filename":orgFileName,
                "filesize":filesize,
                "file":buffer
            };
            tmp.lecture.file = new DBData(obj);
        });
    });
    tmp.lecture.push({title: req.body.title, writer: req.body.writer, content: req.body.content});
    tmp.save();
    res.json({success: true});
*/




module.exports = router;
