const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product],
  })
    .then((tagsData) => {res.json(tagsData);})
    .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  .then((tagsData) => {
    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.json(tagsData);})
  .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((tagsData) => {res.json(tagsData);})
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {id: req.params.id}
  })
  .then((tagsData) => {res.json(tagsData);})
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id}
  })
  .then((tagsData) => {
    if(tagsData === 0) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    } else {
      res.json({message: "Tag deleted!"});
    }
  })
  .catch((err) => res.json(err));
});

module.exports = router;
