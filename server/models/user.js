let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {type: String, required: true}
}, {timestamps: true})

mongoose.model('User', UserSchema)
