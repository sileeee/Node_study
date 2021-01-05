const express = require('express');
const router = express.Router(); //express로 Router을 가져옴

router.get('/', (req,res) => {
    res.send('admin app');
});

module.exports = router; 