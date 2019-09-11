const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail: String,
    nom: String,
    password: String,
    direccio: String,
    num_compte: Number,
    tipus: String

})

module.exports = mongoose.model('User', userSchema)
