const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//get
router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items));
})

//post
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})
module.exports = router;