const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then((categoriesData) => {res.json(categoriesData);})
  .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  .then((categoriesData) => {
    if (!categoriesData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.json(categoriesData);
  })
  .catch((err) => res.json(err));
});


router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((categoriesData) => {res.json(categoriesData);})
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {id: req.params.id}
  })
  .then((categoriesData) => {res.json(categoriesData);})
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id}
  })
  .then((categoriesData) => {res.json(categoriesData);})
  .catch((err) => res.json(err));
});

module.exports = router;
