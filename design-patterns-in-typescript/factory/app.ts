import { GameCharacterFactory } from "./game-character-factory";

let warrior = GameCharacterFactory.getWarrior(6);
let mage = GameCharacterFactory.getMage(12);

console.log(`warrior at level 6: `, warrior);
console.log(`mage at level 12: `, mage);

warrior = GameCharacterFactory.getWarrior(12);
console.log(`warrior at level 12: `, warrior);
console.log(`mage at level 12: `, mage);