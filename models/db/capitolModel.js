const mongoose = require('mongoose');

const capitolSchema = mongoose.Schema({
    titol: String,
    numero: Number,
    temporada: Number,
    serieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    }

})

module.exports = mongoose.model('Capitol', capitolSchema)
