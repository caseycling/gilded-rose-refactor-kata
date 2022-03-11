import Item from './item';

export default class LegendaryItem extends Item {
  constructor(name = 'Sulfuras') {
    //Legedary items will always be at 80 quality
    super(name, 0, 80);
  }

  //Rule: Since legendary items quality never depreciates, only the sellIn value will change
  dayPasses() {
    this.sellIn -= 1;
  }
}
