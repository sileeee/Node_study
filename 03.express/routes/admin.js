const express = require('express');
const router = express.Router(); //express로 Router을 가져옴

router.get('/', (req,res) => {
    res.send('admin app');
});

router.get('/products', function( _ , res){
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
});

module.exports = router; 