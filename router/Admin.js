const express = require('express');

const router = express.Router();

const AdminController = require('../controllers/AdminController');

router.get('/', AdminController.getBarang);

router.get('/tambahbarang', AdminController.getTambahBarang);

router.post('/tambahbarang', AdminController.postTambahBarang);

router.post('/hapusbarang', AdminController.postHapusBarang);

router.get('/detailbarang/:idbarang', AdminController.getDetailBarang);

router.get('/editbarang/:idbarang', AdminController.getEditBarang);

router.post('/editbarang', AdminController.postEditBarang);

router.get('/kategori', AdminController.getKategoriBarang);

router.post('/tambahkategori', AdminController.postTambahKategoriBarang);

router.post('/hapuskategori', AdminController.postHapusKategoriBarang);

module.exports = router;