import Item from './item';

export default class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage pass', sellIn, quality);
  }

  //Other than legendary items, each item has a change in sellIn value as each day passes and a change in quality
  dayPasses() {
    this.sellIn -= 1;
    this.updateQuality();
  }

  //Rule: Backstage passes quality value increases as sellIn decreases until sellIn = 0
  // When sellIn > 10, quliaty increases at 1 perday.
  // When sellIn <= 10, quality increases at 2 per day
  // When sellIn <= 5, quality increases at 3 per day
  // When sellIn < 0, quality drops to 0

  updateQuality() {
    while (this.quality > 0) {
      if (this.sellIn < 0) {
        this.quality === 0;
      } else if (this.sellIn <= 5) {
        this.quality += 3;
      } else if (this.sellIn <= 10) {
        this.quality += 2;
      } else {
        this.quality += 1;
      }
    }
  }
}
