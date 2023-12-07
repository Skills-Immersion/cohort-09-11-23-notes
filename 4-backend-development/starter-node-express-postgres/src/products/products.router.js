const router = require("express").Router();
const { list, listOutOfStockCount, listPriceSummary, read } = require("./products.controller");

localStorage.user = userThatsLoggedIn

router.use(cors())

const methodsAllowed = cors({
    methods: ["GET"]
})
 
router.route("/").get(methodsAllowed, auth, list);
router.route("/out-of-stock-count").get(listOutOfStockCount);
router.route("/price-summary").get(listPriceSummary);
router.route("/:product_id").get(read);


module.exports = router;