
module.exports = {
  addCard: async(req,res) => {

    const db = req.app.get('db');
    console.log(req.body)
    const {word_or_phrase, definition, difficulty, category, part_of_speech, owner_id} = req.body;
    const addCards = await db.add_card([word_or_phrase, definition, difficulty, category, part_of_speech, owner_id])
    res.status(200).send(addCards)
    

  },
  deleteCard: async (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    try{
      const deletedCards = await db.delete_card(+id)
      res.status(200).send(deletedCards)
    }
    catch(err) {
      console.log(err)
    }

  },
  editCard: async(req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    const {difficulty} = req.body;
    try{
      const newDiff = await db.edit_card(+id, difficulty)
      res.status(200).send(newDiff)
    }
    catch(err){
        console.log(err)
    }

  },
  getAllCards: async(req, res) => {
    const db = req.app.get('db');
    const getCards = await db.get_all_cards()
    res.status(200).send(getCards)
  },
  getMyCards: async(req, res) => {
    const db = req.app.get('db')
    console.log("req.params.ownerId:", req.params.ownerId);
    const getMyCards = await db.get_my_cards([req.params.ownerId])
    res.status(200).send(getMyCards)

  },
  getMyCard: async(req, res) => {
    const db = req.app.get('db');
    console.log("req.params.ownerId:", req.params.ownerId);
    console.log("req.params.cardId:", req.params.cardId);
    const myCard = await db.get_my_card([req.params.ownerId, req.params.cardId])
    res.status(200).send(myCard)
  },
  updateMyCard: async(req, res) => {
    const db = req.app.get('db');
    console.log("req.params.ownerId:", req.params.ownerId);
    console.log("req.params.cardId:", req.params.cardId);
    console.log("req.body", req.body)
    const myUpdatedCard = await db.update_my_card([
      req.params.ownerId,
      req.params.cardId,
      req.body.word_or_phrase,
      req.body.definition,
      req.body.category,
      req.body.part_of_speech,
      req.body.difficulty,
      req.body.owner_id
    ])
    res.status(200).send(myUpdatedCard)
  }

}