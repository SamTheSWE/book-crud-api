const express = require('express');
const router = express.Router();
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
