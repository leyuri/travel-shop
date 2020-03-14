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
    let term = req.body.searchTerm;

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


    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            //몽고디비로부터
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }



});

//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    //type=single 이것을 사용하기 있기 때문에
    let productIds = req.query.id

    if (type === "array") {

    }

    //우리는 제품 ID에 속하는 제품 정보를 찾아야 함
    Product.find({ '_id': { $in: productIds } })
    //in, input,,찾는 거
    .populate('writer')
    .exec((err, product) => {
        if(err) return req.status(400).send(err)
        return res.status(200).send(product)
    })
});







module.exports = router;
