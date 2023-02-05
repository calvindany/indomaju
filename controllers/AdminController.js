const Barang = require("../models/Barang");
const Kategori = require("../models/Kategori");

exports.getBarang = (req, res, next) => {
    Barang.find()
    .then( barang => {
        res.render('admin/Barang', {
            title : "Barang",
            barang : barang
        });
    })
}

exports.getTambahBarang = (req, res, next) => {
    res.render('admin/TambahBarang', {
        editmode : false
    });
}

exports.postTambahBarang = (req, res, next) => {
    const nama = req.body.namabarang;
    const stok = req.body.stok;
    const kategori = req.body.kategori;
    const modal = req.body.modal;
    const harga = req.body.harga;
    
    const barang = new Barang({
        namabarang : nama,
        stok : stok,
        kategori : kategori,
        modal : modal,
        harga : harga
    });

    barang.save();

    return res.redirect('/');
}

exports.postHapusBarang = (req, res, next) => {
    const idBarang = req.body.idbarang;

    Barang.findByIdAndDelete({_id : idBarang})
    .then(result => {
        res.redirect('/');
    })
    .catch( err => {
        console.log(err);
    })
}

exports.getDetailBarang = (req, res, next) => {
    const idbarang = req.params.idbarang;

    Barang.findOne({_id : idbarang})
    .then( barang => {
        res.render('admin/DetailBarang', {
            barang : barang,
            editmode : true
        });
    })
}

exports.getEditBarang = (req, res, next) => {
    const idbarang = req.params.idbarang;

    Barang.findOne({_id : idbarang})
    .then( barang => {
        res.render('admin/TambahBarang', {
            barang : barang,
            editmode : true
        });
    })
}

exports.postEditBarang = (req, res, next) => {
    const idbarang = req.body.idbarang;

    const namabarang = req.body.namabarang;
    const stok = req.body.stok;
    const kategori = req.body.kategori;
    const modal = req.body.modal;
    const harga = req.body.harga;

    Barang.findOne({ _id : idbarang})
    .then(barang => {
        barang.namabarang = namabarang;
        barang.stok = stok;
        barang.kategori = kategori;
        barang.modal = modal;
        barang.harga = harga;

        barang.save();
        return res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getKategoriBarang = (req, res, next) => {
    Kategori.find()
    .then(kategori => {
        return res.render('admin/TambahKategori', {
            kategori : kategori
        });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.postTambahKategoriBarang = (req, res, next) => {
    const namakategori = req.body.kategori;

    const kategori = new Kategori({
        kategori : namakategori
    });

    kategori.save();

    return res.redirect('/admin/kategori')
}

exports.postHapusKategoriBarang = (req, res, next) => {
    const idkategori = req.body.idkategori;

    Kategori.findOneAndDelete({_id : idkategori})
    .then( result => {
        return res.redirect('/admin/kategori');
    })
}