const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `localhost:3001/api/categories/` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: { id: req.params.id},
    include: [Product]
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});
// post and puts require a req.body
// find Body button under insomnia url bar and select JSON
// { "category_name": "UF"}
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});
//needs both a req.params.id AND a req.body
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where:{id: req.params.id}
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{id: req.params.id}
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

module.exports = router;
