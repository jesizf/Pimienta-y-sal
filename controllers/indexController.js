const products =require('../data/products.json');
const path=require('path');
module.exports = {
    index : (req, res) => {
        res.render('index',{
            tittle: "Pimienta & Sal",
            products,
            images: "/principal.jpg"
        })
    }
}