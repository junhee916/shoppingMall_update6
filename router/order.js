const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message : "get order"
    })
})

router.post("/", (req, res) => {
    const newOrder = {
        product : req.body.productId,
        quentity : req.body.qty
    }
    res.json({
        message : "register order",
        orderInfo : newOrder
    })
})

router.patch("/", (req, res) => {
    res.json({
        message : "updated order"
    })
})

router.delete("/", (req, res) => {
    res.json({
        message : "deleted order"
    })
})
module.exports  = router