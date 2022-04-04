"use strict";

let itemCreator = (function () {
  function isValidName(itemName) {
    let itemNameNoSpace = itemName.split(' ').join('');
    return itemNameNoSpace.length > 5;
  }

  function isValidCategory(category) {
    let categoryNoSpace = category.split(' ').join('');
    return (category.length > 5 && categoryNoSpace === category);
  }

  function createSKU(itemName, category) {
    let itemNameNoSpace = itemName.split(' ').join('');
    let first = itemNameNoSpace.substring(0, 3);
    let second = category.substring(0, 2);
    return (first + second).toUpperCase();
  }

  function ItemConstructor(itemName, category, quantity) {
    if (!(this instanceof ItemConstructor)) {
      return new ItemConstructor(itemName, category, quantity);
    }
    if (isValidName(itemName) && isValidCategory(category) && quantity !== undefined) {
      this.SKU = createSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { invalid: true };
    }
  }
  return ItemConstructor
})();

let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = new itemCreator(itemName, category, quantity);
    if (item.invalid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(SKU, object) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].SKU === SKU) {
        Object.assign(this.items[i], object);
        return true;
      }
    }
    return false;
  },

  delete(SKU) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].SKU === SKU) {
        this.items.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0
    })
  },
  itemsInCategory(category) {
    return this.items.filter(item => {
      return (item.category === category)
    })
  }
};

let ReportManager = {
  init(manager) {
    this.items = manager;
  },
  createReporter(SKU) {
    let manager = this.items;
    return {
      itemInfo() {
        for (let index = 0; index < manager.items.length; index += 1) {
          if (manager.items[index].SKU === SKU) {
            for (let [key, value] of Object.entries(manager.items[index])) {
              console.log(`${key}: ${value}`);
            }
            return true;
          }
        }
        return false;
      }
    }
  },
  reportInStock() {
    for (let index = 0; index < this.items.items.length; index += 1) {
      if (this.items.items[index].quantity > 0) {
        console.log(this.items.items[index].itemName);
      }
    }
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items

console.log(ItemManager.items);
ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());

// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10