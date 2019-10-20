const mongoose = require('mongoose');
const Schema = mongoose.schema;

const ItemSchema = new Schema({
    name: {
        type: string,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);