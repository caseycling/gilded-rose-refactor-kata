import Item from './item';

export default class RegularItem extends Item {
  constructor(sellIn, quality) {
    super('Regular item', sellIn, quality);
  }

  //Other than legendary items, each item has a change in sellIn value as each day passes and a change in quality
  dayPasses() {
    this.sellIn -= 1;
    this.updateQuality();
  }

  //Rule: regular item quality depreciate at 1 per day
  // When sellIn < 0, quality depreciates at 2 per day
  updateQuality() {
    while (this.quality > 0) {
      this.sellIn >= 0 ? (this.quality -= 1) : (this.quality -= 2);
    }
  }
}
