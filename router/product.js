const express = require('express')
const productModel = require('../models/product')
const router = express.Router()

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

router.patch("/", (req, res) => {
    res.json({
        message : "updated product"
    })
})

router.delete("/", (req, res) => {
    res.json({
        message : "deleted product"
    })
})

module.exports = router