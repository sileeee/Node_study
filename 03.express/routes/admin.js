const express = require('express');
const router = express.Router(); //express로 Router을 가져옴

router.get('/', (req,res) => {
    res.send('admin app');
});
router.get('/products', (req,res) => {
    res.send('admin products');
});
module.exports = router; 