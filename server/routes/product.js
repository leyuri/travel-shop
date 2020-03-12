const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Product } = require("../models/Product");

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.post("/uploadProduct", auth, (req, res) => {

    //클라이언트에서 받은 정보들 몽고디비에 저장
    const product = new Product(req.body)

    product.save((err) => {
        if (err) returnres.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

router.post("/getProducts", (req, res) => {


    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    console.log(findArgs)
    // {continents: Array(1), price: Array(2)}
    // continents: [1]
    // price: (2) [250, 279]
    // __proto__: Object

    // {continents: Array(2), price: Array(2)}
    // continents: (2) [2, 3]
    // price: (2) [200, 249]
    // __proto__: Object
    Product.find(findArgs)
    .populate("writer")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, products, postSize: products.length })
   })


});


module.exports = router;
