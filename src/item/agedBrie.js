import Item from './item';

export default class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged brie', sellIn, quality);
  }

  dayPasses() {
    this.sellIn -= 1;
    this.updateQuality();
  }

  //Rule: Aged brie increases in value as the sellIn value decreases.
  // When sellIn >= 0, the quality increases at 1 per day
  // When sellIn < 0, the quality increases at 2 per day

  updateQuality() {
    while (this.quality < 50) {
      this.quality =
        this.sellIn >= 0 ? (this.quality += 1) : (this.quality += 2);
    }
  }
}
