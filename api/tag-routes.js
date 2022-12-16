const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  //My entry for setting the tag data for the GET function
  try {
    const tagData = await Tag.findAll({
     attributes:['id','tag_name'],
      include: [
      {
        model:Product,
        attributes:['id','product_name','price','stock','category_id']
      },
      ]
      });
      res.json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  //My entry for setting the tag data for the GET function
  try {
    const tagData = await Tag.findOne({
    where:{
      id:req.params.id
    },
      attributes:['id','tag_name'],
      include: [
      {
        model:Product,
        attributes:['id','product_name','price','stock','category_id']
      },
      ]
      });
      res.json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }

});

router.post('/',async (req, res) => {
  // create a new tag
  //My entry for setting the tag data for the POST function
  try {
    const tagData = await Tag.create({
    tag_name: req.body.tag_name
    })
      res.json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  //My entry for setting the category data for the PUT function
  try {
    const tagData = await Tag.update(req.body,{
     where: {
      id: req.params.id
     }
     
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  //My entry for setting the tagdata for the DELETE function
  try {
    const tagData = await Tag.destroy(req.body,{
     where: {
      id: req.params.id
     }
     
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
