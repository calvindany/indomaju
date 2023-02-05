const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const barangSchema = new Schema({
    namabarang: {
        type: String,
        required: true
    },
    stok: {
        type: Number,
        require: true
    },
    kategori: {
        type: String,
        required: false
    },
    modal: {
        type: Number,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    catatan: {
        type: String,
        required: false
    }
}, { collection: "barang" });

module.exports = mongoose.model('barang', barangSchema);