var express = require('express');
var router = express.Router();
const study= require('../data/study');
const notices= require('../data/notice');

router.get('/notice', function(req, res){
    notices.find( (err, post) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json({success : true, result : post});
    })
});

router.post('/lecturenotecreate', function(req, res) {
    notices.create(req.body, function (err, post) {
        if (err) return console.log(err);
        else {
            var temp = new notices();
            temp.lecture.push({title : req.body.title,
                writer:req.body.writer,
                content: req.body.content,
                file:req.body.file,
                studyID:Number})

            temp.save(function (err) {
                if (err) {
                    res.json({success: false})
                }
            });

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

module.exports = router;
