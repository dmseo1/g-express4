var router = require('express').Router();

router.get("/hello", (req, res) => {
    console.log(req.query);
});

var dataArray = ['사과', '배', '바나나', '포도', '망고'];

router.get("/about", (req, res) => {
    res.render('index2', {
        name : '서동민',
        title : '반갑습니다',
        fruits : dataArray
    });
});

module.exports = router;