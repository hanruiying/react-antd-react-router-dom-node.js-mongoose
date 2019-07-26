var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houtaiguanli', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var menuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    path: {
        type: String,
        required: true
    },
    children: {
        type: Array
    }
})
var Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu;