import { CardDeck } from "./card-deck";
import { Card } from "./card";

let cardDeck = new CardDeck();
cardDeck.add(new Card("Card 1", 34, 56));
cardDeck.add(new Card("Card 2", 12, 34));

let secondDeck = new CardDeck();
secondDeck.add(new Card("Card 3", 34, 56));
secondDeck.add(new Card("Card 4", 12, 34));

cardDeck.add(secondDeck);
cardDeck.add(new Card("Card 5", 99, 100));

console.log(cardDeck.display());