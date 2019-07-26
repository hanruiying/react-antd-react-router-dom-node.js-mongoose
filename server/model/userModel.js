var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houtaiguanli', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        requied: true
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
})
var User = mongoose.model('User', userSchema)
module.exports = User;