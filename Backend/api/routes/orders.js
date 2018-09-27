const express = require('express');
const  router = express();



router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders fetched'
    })
});
router.post('/', (req, res, next) => {
    const order={
        productId: req.body.productId,
        quantity: req.body.quantity
    };
   
    res.status(200).json({
        message: 'Orders created',
        order: order
    })
});
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === "special") {
        res.status(200).json({
            message: 'Order details',
            id: id
        })
    }
    else
    {
        res.status(200).json({
            message: 'Order details '+id
        })
    }
});



router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleteed'
    })
});

module.exports= router;