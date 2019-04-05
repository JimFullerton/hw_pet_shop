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
  },

  getPetByName(shop, petName) {
    for (pet of shop.pets) {
      if (pet.name === petName) {
        return pet;
      }
    }
  },

  removePetByName(shop, petName) {
    for(var i = shop.pets.length-1; i >= 0; i--) {
      if (shop.pets[i].name === petName) {
        shop.pets.splice(i, 1);
      }
    }
  },

  addPetToStock(shop, newPet) {
    shop.pets.push(newPet);
  },

  getCustomersCash(cust) {
    return cust.cash;
  },

  getCustomersCashTotal(custs) {
    let custCashTot = 0;
    for (let cust of custs) {
      custCashTot += cust.cash;
    }
    return custCashTot;
  },

  removeCustomerCash(cust, cashDebit) {
    cust.cash -= cashDebit;
  },

  getCustomerPetCount(cust) {
    return cust.pets.length;
  },

  addPetToCustomer(cust, newPet) {
    cust.pets.push(newPet);
  }

};

module.exports = myFunctions;
