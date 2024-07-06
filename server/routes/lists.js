import express from 'express';

const router = express.Router();

// GET all lists
router.get('/', (req, res) => {
  res.json({
    message: 'GET all lists'
  });
});

// Get a single list based on ID
router.get('/:id', (req, res) => {
  res.json({
    message: 'Get a single list'
  });
});

// POST a new list
router.post('/', (req, res) => {
  res.json({
    message: 'Create new list'
  });
});

// Delete a single list
router.delete('/:id', (req, res) => {
  res.json({
    message: 'Delete a single list'
  });
});

// Update a single list
router.patch('/:id', (req, res) => {
  res.json({
    message: 'Update a single list'
  });
});

export default router;
