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
  },

  increasePetsSold(shop, numberSold) {
    shop.admin.petsSold += numberSold;
  },

  getStockCount(shop) {
    return shop.pets.length;
  },

  getPetsByBreed(shop, breed) {
    let countByBreed = 0;
    for (pet of shop.pets) {
      if (pet.breed === breed) {
        countByBreed++;
      }
    }
    return countByBreed;
  }

  

};

module.exports = myFunctions;
