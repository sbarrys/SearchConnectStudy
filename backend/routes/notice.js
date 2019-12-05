var express = require('express');
var router = express.Router();
const notices= require('../data/notice');
const study =  require('../data/study')

router.get('/notice', function(req, res){
    notices.find( (err, post) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json({success : true, result : post});
    })
});

router.post('/create', function(req, res) {
    notices.create(req.body, function (err, post) {
        if (err) return console.log(err);
    });
    res.json({success: true});
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
    notices.find( (err, post) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json({success : true, result : post});
    })
});
router.post('/study/:id/lecturenote/create', function(req, res) {

    notices.lecture.create(req.body, function (err, post) {
        if (err) return console.log(err);
    });
    var tmp = new notices();
    tmp.lecture.push({title: req.body.title, writer: req.body.writer, content: req.body.content});
    tmp.save();
    res.json({success: true});

});
router.get('/study/:id/lecturenote/:id', function(req, res){
    notices.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json({success : true, result : post});
    });
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
*/
