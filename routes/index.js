var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:c6JGxLRygz6RejGO@cluster0.7fksjrg.mongodb.net/?retryWrites=true&w=majority');

const SinhVien = new mongoose.Schema({
    id: Number,
    name: String,
    sdt: String,
    address: {
        add1: String,
        add2: String
    }
})
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/themSV', function (req, res) {
    res.render('insert', {title: 'Them Sinh Vien'})
})
router.post('/insertStudent', function (req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const sdt = req.body.sdt;
    const add1 = req.body.add1;
    const add2 = req.body.add2;

    const SV = mongoose.model('Student', SinhVien);
    const sinhVien = new SV({
        id: id,
        name: name,
        sdt: sdt,
        address: {
            add1: add1,
            add2: add2
        }
    })
    sinhVien.save().then(data => {
        if (data != null) {
            res.render('insert', {title: 'Them Sinh Vien Thanh Cong'})
        } else {
            res.render('insert', {title: 'Them Sinh Vien Khong Thanh cong ' + error})
        }
    });
})

router.get('/update', function (req, res) {
    const SV = mongoose.model('Student', SinhVien);

    SV.updateOne({_id: '637df286d21d2e9c7d62faea'}, {
        id: 342343,
        name: 'HUY HUY HUY',
        sdt: '123456789',
        address: {
            add1: 'BBBBBBBBBBBBB',
            add2: 'CCCCCCCCCCCCCC'
        }
    }).then(data => {
        if (data != null) res.send("Update thanh cong~!!!!")
    })

})
router.get('/delete', function (req, res) {
    const SV = mongoose.model('Student', SinhVien);

    SV.deleteOne({_id: '637df286d21d2e9c7d62faea'}).then(data => {
        if (data != null) res.send("Delete thanh cong~!!!!")
    })
})
router.get('/danhSach', function (req, res) {
    const SV = mongoose.model('Student', SinhVien);

    SV.find({}).then(data => {
        res.send(data)
    })
})

router.get('/categories', function (req, res) {
    var name = 'HUY NGUYEN';
    var number = 100
    var array = [23, 5, 6, 4, 3, 4, 6, 4, 3, 3, 5, 3, 2, 4, 4, 6];
    var names = ['HUY', 'ABC', 'KKKK', 'HHHH', 'akjhdj', 'fsdkfhdsfkjhds']
    var soThu = 45.5;
    var kiTU = 'A';
    var trueOrFalse = true;
    var hoTen = `Ten cua ban la ${name}`

    var object = {
        name: 'Huy Nguyen',
        tuoi: 33,
        diaChi: 'H noi - lam tu niem - Dong anh ....'
    }

    var arrayObject = [
        {
            name: 'Huy Nguyen',
            tuoi: 33,
            diaChi: 'H noi - lam tu niem - Dong anh ....'
        }, {
            name: 'Huy Nguyen',
            tuoi: 22,
            diaChi: 'H noi - lam tu niem - Dong anh ....'
        }, {
            name: 'Huy Nguyen',
            tuoi: 11,
            diaChi: 'H noi - lam tu niem - Dong anh ....'
        }
    ]

    res.render("categories", {
        title: "HELLO Category"
        , name: name,
        number: number,
        array: array,
        names: names,
        soThu: soThu,
        kiTU: kiTU,
        trueOrFalse: trueOrFalse,
        hoTen: hoTen,
        object: object,
        arrayObject: arrayObject,
    })
})

module.exports = router;
