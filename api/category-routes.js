const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
   try {
    const categoryData = await Category.findAll({
     include: [
      {
        model:Product,
        attributes:['id', 'produnct_name','price','stock', 'category_id']
      }
     ]
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
     where:{
      id:req.params.id
     },
     
      include: [
      {
        model:Product,
        attributes:['id', 'produnct_name','price','stock', 'category_id']
      }
     ]
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
    category_name: req.body.category_name
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body,{
     where: {
      id: req.params.id
     }
     
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(req.body,{
     where: {
      id: req.params.id
     }
     
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
