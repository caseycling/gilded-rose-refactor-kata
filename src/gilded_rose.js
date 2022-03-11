import {
  AgedBrie,
  BackstagePass,
  LegendaryItem,
  ConjuredItem,
  RegularItem,
} from './item';

class Shop {
  constructor(items = []) {
    this.items = items.map((item) => {
      if (item.name === 'Aged brie')
        return new AgedBrie(item.sellIn, item.quality);
      else if (item.name === 'Backstage pass')
        return new BackstagePass(item.sellIn, item.quality);
      else if (item.name === 'Sulfuras') return new LegendaryItem();
      else if (item.name === 'Conjured item')
        return new ConjuredItem(item.name, item.sellIn, item.quality);
      else return new RegularItem(item.name, item.sellIn, item.quality);
    });
  }

  updateQuality() {
    this.items.forEach((item) => item.dayPasses());
    return this.items;
  }
}
module.exports = {
  Shop,
};
