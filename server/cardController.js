
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
    const getMyCards = await db.get_my_cards([req.params.id])
    res.status(200).send(getMyCards)

  }

}