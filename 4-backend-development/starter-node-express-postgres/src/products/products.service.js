const knex = require("../db/connection");
const { mapProperties } = require("../utils/mapProperties")

const addSupplier = mapProperties({
    supplier_id: "supplier.supplier_id",
    supplier_name: "supplier.supplier_name",
    supplier_city:  "supplier.supplier_city"
});
function listAll() {
    return knex("products").select("*")
}

function readService(product_id) {
    // SELECT * FROM products JOIN suppliers ON products.supplier_id = suppliers.supplier_id WHERE products.product_id = products.product_id
    return knex("products as p")
        .join("suppliers as s", "s.supplier_id", "p.supplier_id")
        .select("*")
        .where({product_id})
        .first()
        .then(addSupplier)
}

function listOutOfStockCountService() {
    // SELECT COUNT(*) FROM products WHERE product_quantity_in_stock = 0 GROUP BY product_quantity_in_stock
    return knex("products")
        .select("product_quantity_in_stock as out_of_stock")
        .count("product_id")
        .where({ product_quantity_in_stock: 0 })
        .groupBy("out_of_stock");
}

function listPriceSummaryService() {
    // SELECT *  min(product_price), max(product_price), avg(product_price) FROM products GROUP supplier_id
    return knex("products")
        .select("supplier_id as supplier")
        .min("product_price as min_price")
        .max("product_price as max_price")
        .avg("product_price as avg_price")
        .groupBy("supplier_id")
}

module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService,
    readService
}