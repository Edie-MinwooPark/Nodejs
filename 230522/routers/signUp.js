const router = require('express').Router();
const {signUp} = require('../controllers/signUpController');

router.get('/',(req,res)=>{
    res.render('signUP')
});

router.post('/',signUp);

module.exports = router;