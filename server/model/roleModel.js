var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houtaiguanli', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var roleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date
    },
    auth_time: {
        type: Date
    },
    auth_name: {
        type: String
    },
    menu: {
        type: Array
    }
})
var Role = mongoose.model('Role', roleSchema)
module.exports = Role;