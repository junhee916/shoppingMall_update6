const express = require('express')
const productModel = require('../models/product')
const router = express.Router()


// total product get
router.get("/", (req, res) => {
    // res.json({
    //     message : "get product"
    // })
    productModel
        .find()
        .then(products => {
            res.json({
                msg : "get total products",
                count : products.length,
                productInfo : products
            })

        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })
})


// detail product get
router.get("/:productId", (req, res) => {
    const id = req.params.productId
    productModel
        .findById(id)
        .then(product => {
            res.json({
                msg : "get product by " + id,
                productInfo : product
            })
        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })
})


// register product
router.post("/", (req, res) => {
    const newProdcut = new productModel({
        name : req.body.productName,
        price : req.body.productPrice
    })

    newProdcut
        .save()
        .then(product => {
            res.json({
                msg : "saved product",
                productInfo : product
            })
        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })
})

// update product
router.patch("/:productId", (req, res) => {
    const id = req.params.productId

    const updateOps = {}

    for (const ops of req.body){
        updateOps[ops.propName] = ops.value
    }

    productModel
        .findByIdAndUpdate(id, { $set : updateOps })
        .then(() => {
            res.json({
                msg : "updated product by " + id
            })
        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })
})

//delete product
router.delete("/", (req, res) => {
    // res.json({
    //     message : "deleted product"
    // })

    productModel
        .remove()
        .then(() => {
            res.json({
                msg : "deleted products"
            })
        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })
})

//detail delete product
router.delete("/:productId", (req, res) => {

    const id = req.params.productId

    productModel
        .findByIdAndRemove(id)
        .then(() => {
            res.json({
                msg : "deleted productId by " + id
            })
        })
        .catch(err => {
            res.status(500).json({
                msg : err.message
            })
        })

})


module.exports = router