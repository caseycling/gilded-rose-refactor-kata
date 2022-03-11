import Item from './item';

export default class ConjuredItem extends Item {
  //Other than legendary items, each item has a change in sellIn value as each day passes and a change in quality
  dayPasses() {
    this.sellIn -= 1;
    this.updateQuality();
  }

  //Rule: Conjured items depreciate at twice the rate as normal items
  // Since normal items depreciate at 1 per day when the sellIn > 0,
  // they will depreciate at 2 per day.
  // Since normal items depreciate at 2 per day when sellIn < 0,
  // they will depreciate at 4 per day

  updateQuality() {
    while (this.quality > 0) {
      this.quality =
        this.sellIn > 0 ? (this.quality -= 2) : (this.quality -= 4);
    }
  }
}
