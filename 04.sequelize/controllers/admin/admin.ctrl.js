const models = require('../../models');

exports.get_products = ( _ , res) => {
    models.Products.findAll({

    }).then( (products) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render( 'admin/products.html' ,{ products : products });
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products'); //저장하고나서 메인페이지로 이동
    });
}

// res.send해보면 알겠지만 req.body자체가 이미 형식을 지니고있어서 다음과같이 하나하나 지정안해도 DB에 잘 들어간다
// exports.post_products_write = ( req , res ) => {
//     models.Products.create(req.body).then( () => {
//         res.redirect('/admin/products'); //저장하고나서 메인페이지로 이동
//     });
// }