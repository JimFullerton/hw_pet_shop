myFunctions = {

  getName(shop) {
    return shop.name;
  },

  getTotalCash(shop) {
    return shop.admin.totalCash;
  },

  addOrRemoveCash(shop, amount) {
    shop.admin.totalCash += amount;
  },

  getPetsSold(shop) {
    return shop.admin.petsSold;
  }
};

module.exports = myFunctions;
