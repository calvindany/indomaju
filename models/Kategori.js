const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kategoriSchema = new Schema({
    kategori: {
        type : String,
        required : true
    }
}, {collection : "kategori"});

module.exports = mongoose.model('kategori', kategoriSchema);