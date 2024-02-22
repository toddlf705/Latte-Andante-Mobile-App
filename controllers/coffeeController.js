const Coffee = require('../models/coffeeshop')

const getAllCoffee = async (req, res) => {
   try {
      const coffees = await Coffee.find({})
      res.json(coffees)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getCoffeeByName = async (req, res) => {
   try {
      const{ name } = req.params
      let { store_name } = req.query
      const storename = await Coffee.find({store_name: name})
         res.json(storename)
   } catch (e){
      return res.status(500).send(e.message)
   }
}

const getCoffeeByCategory = async (req, res) => {
   try {
      const { categories } = req.params
      let { category } = req.query
      const premium_category = (await Coffee.find({category: categories}))
         res.json(premium_category) 
   } catch (e){
      return res.status(500).send(e.message)
   }
}

module.exports = {
    getAllCoffee,
    getCoffeeByName,
    getCoffeeByCategory
   }
 