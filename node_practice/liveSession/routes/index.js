let express = require('express');
let router = express.Router();
router.get('/', (req,res)=>{
    console.log('Home page');
    res:send('Home page');
});
router.get('/', (req,res)=>{
    console.log('Home page');
    let data = {
        'username': null
    }
    res:render('index', data);
});
module.exports = router;