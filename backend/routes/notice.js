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
    notices.create(req.body, function (err, post) {
        if (err) return console.log(err);
        else res.json({success: true});
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

router.get('/study/:id/lecturenote', function(req, res){
    notices.findOne({_id:req.params.id}).select('lecture').exec(function (err, result) {
        var temp = result.lecture
        res.json({success: true, result: temp});
    })
});
router.post('/study/:id/lecturenote/create', function(req, res) {

    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        post.lecture.push(req.body)
        post.save()
        res.json({success: true});
    });

});


router.get('/study/:id/lecturenote/:idd', function(req, res){
    notices.findOne({_id:req.params.id}).select('lecture').exec(function (err, result) {
        if (err) return next(err);
        var temp = result.lecture;
        var dum = temp[req.params.nowIndex];
        res.json({success : true, result : dum});

    })

});
router.put('/study/:id/notice/edit/:idd', function(req, res) {

    notices.findOneAndUpdate(
        {_id:req.params.id, lecture:{$elemMatch:{_id:req.body._id}}},
        {$set:{"lecture.$.title":req.body.title,
                "lecture.$.content":req.body.content,
                "lecture.$.file":req.body.file}},
        function (err, result) {
            if (err) return next(err);
            res.json({success: true});
        }
    )

});
router.delete('/study/:id/notice/:idd', (req, res) => {

    notices.findById(req.params.id,function (err, post) {
        if(err) return next(err)
        post.lecture.pull({_id:req.body._id})
        post.save()
        res.json({success:true})
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
