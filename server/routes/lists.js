const express = require('express');

const router = express.Router();

//GET all lists
router.get('/', (req, res) => {
  res.json({
    message: 'Get all lists from the user'
  });
});

router.get('/:id', (req, res) => {
  res.json({
    message: 'Get a specific list'
  });
});

router.post('/', (req, res) => {
  res.json({
    message: 'Create new list'
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    message: 'Delete a specific list'
  });
});

router.patch('/:id', (req, res) => {
  res.json({
    message: 'Update a specific list'
  });
});

module.exports = router;
