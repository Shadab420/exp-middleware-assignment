
module.exports.root = (req, res, next) => {
    return res.send("Product middleware Root");
    next();
}

module.exports.allProducts = (req, res, next) => {
    return res.send("Product middleware AllProducts");
    next();
}

module.exports.productDetails = (req, res, next) => {
    return res.send("Product middleware product details");
    next();
}