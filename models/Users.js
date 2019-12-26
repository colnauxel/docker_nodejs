const mongose= require('mongoose');
const Schema =mongose.Schema;

const UsersSchema=new Schema({
    username:{
        type:String,
        required:true
    }
});

module.exports = Users=mongose.model('users',UsersSchema);