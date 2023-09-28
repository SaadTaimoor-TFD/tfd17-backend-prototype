const cards = require('./data.json')

class CardsManager {
  constructor() {
    // Singleton
    if (!!CardsManager.instance) {
      return CardsManager.instance
    }

    this.cards = cards
    console.log(this.cards)
    CardsManager.instance = this
  }

  getCards() {
    return this.cards
  }

  getCard(id) {
    return this.cards[id]
  }

  editCard(id, newCard) {
    this.cards[id] = newCard
  }

  addCard(newCard) {
    const id = Object.keys(this.cards).length + 1
    newCard.id = id
    this.cards[id] = newCard
  }

  newCardTemplate() {
    return {
      "category": "",
      "type": "",
      "chapter": "",
      "reference": "",
      "question": "",
      "question_img": "",
      "answer": "",
      "answer_img": ""
    }
  }
}

export default CardsManager