const products =require('../data/products.json');
const path=require('path');
module.exports = {
    
    detail: (req,res)=> {
    let producto= products.find(product => product.id === +req.params.id)
    res.render('detalleMenu',{producto})}
   
};