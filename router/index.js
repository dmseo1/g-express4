var router = require('express').Router();

router.get('/hello', (req, res) => {
    res.render('index', {
        title : '안녕하세요~!~!~!~!~!~!!~!'
    });
});

router.get('/dancing', (req, res) => {
    res.render('dancing');
});

module.exports = router;