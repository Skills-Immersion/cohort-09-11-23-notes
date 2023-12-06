const lodash = require("lodash");

function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

function formatPrice(stringPrice, decimalPlaces) {
    return Number(parseFloat(stringPrice).toFixed(decimalPlaces));
}

function transformPriceToNum(supplierObj) {
      return {
          supplier_id: supplierObj.supplier_id,
          min_price: formatPrice(supplierObj.min_price, 2),
          max_price: formatPrice(supplierObj.max_price, 2),
          avg_price: formatPrice(supplierObj.avg_price, 2)
      }
}

module.exports = {
    mapProperties,
    transformPriceToNum
}